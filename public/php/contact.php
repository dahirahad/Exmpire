<?php
/**
 * EmpireX Business Academy – Contact Form PHP Handler
 *
 * Requirements Met:
 * - Pure Core PHP
 * - No database
 * - Direct delivery to empirexbusinessacademy577@gmail.com
 * - Anti-spam honeypot + rate-limiting
 * - Input validation & sanitization
 * - Supports both AJAX (React fetch) and standard HTML form submission
 */

// ── Security Headers ────────────────────────────────────────────────────────
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');

$allowed_origins = [
    'https://www.nefftosolution.com',
    'https://nefftosolution.com',
    'http://localhost:5173',
    'http://localhost:3000',
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $allowed_origins, true)) {
    header("Access-Control-Allow-Origin: $origin");
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Determine if request is AJAX (from fetch/React) or standard HTML form submission
$is_ajax = !empty($_SERVER['HTTP_X_REQUESTED_WITH'])
    || (isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false)
    || (isset($_SERVER['CONTENT_TYPE']) && strpos($_SERVER['CONTENT_TYPE'], 'multipart/form-data') !== false && isset($_POST['form_type']));

function respond($success, $message, $is_ajax, $http_code = 200) {
    http_response_code($http_code);
    if ($is_ajax) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['success' => $success, 'message' => $message]);
        exit;
    }

    // Direct HTML submission fallback response page
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title><?php echo $success ? 'Message Received' : 'Submission Error'; ?> | EmpireX Business Academy</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #F4F6F9; margin: 0; padding: 40px 20px; color: #102033; }
        .card { max-width: 540px; margin: 40px auto; background: #FFFFFF; border-radius: 16px; padding: 40px; border: 1px solid #E2E7EF; text-align: center; box-shadow: 0 10px 25px rgba(6,26,51,0.06); }
        .icon { width: 64px; height: 64px; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 28px; }
        .success { background: #ECFDF5; color: #059669; }
        .error { background: #FEF2F2; color: #DC2626; }
        h2 { margin: 0 0 12px 0; color: #061A33; font-size: 24px; }
        p { color: #687386; font-size: 14px; line-height: 1.6; margin: 0 0 24px 0; }
        .btn { display: inline-block; background: #F5A000; color: #061A33; font-weight: 700; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; padding: 12px 28px; border-radius: 8px; text-decoration: none; transition: 0.2s ease; }
        .btn:hover { background: #DF9100; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="icon <?php echo $success ? 'success' : 'error'; ?>">
          <?php echo $success ? '✓' : '✕'; ?>
        </div>
        <h2><?php echo $success ? 'Message Sent Successfully' : 'Submission Notice'; ?></h2>
        <p><?php echo htmlspecialchars($message, ENT_QUOTES, 'UTF-8'); ?></p>
        <a href="/" class="btn">Return to Website</a>
      </div>
    </body>
    </html>
    <?php
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, 'Method not allowed. Please submit the form via POST.', $is_ajax, 405);
}

// ── Rate Limiting (Session-based, max 5 per 10 mins) ─────────────────────────
session_start();
$currentTime = time();
$rateWindow  = 600;
$maxLimit    = 5;

if (!isset($_SESSION['empirex_form_timestamps'])) {
    $_SESSION['empirex_form_timestamps'] = [];
}
$_SESSION['empirex_form_timestamps'] = array_filter(
    $_SESSION['empirex_form_timestamps'],
    fn($t) => ($currentTime - $t) < $rateWindow
);
if (count($_SESSION['empirex_form_timestamps']) >= $maxLimit) {
    respond(false, 'Too many submissions. Please wait a few minutes before trying again or email empirexbusinessacademy577@gmail.com directly.', $is_ajax, 429);
}

// ── Recipient Email Configuration ───────────────────────────────────────────
$recipient_email = 'empirexbusinessacademy577@gmail.com';
$business_name   = 'EmpireX Business Academy';

$configFile = __DIR__ . '/config.php';
if (file_exists($configFile)) {
    require_once $configFile;
    if (defined('BUSINESS_EMAIL') && !empty(BUSINESS_EMAIL)) {
        $recipient_email = BUSINESS_EMAIL;
    }
}

// ── Anti-Spam: Honeypot Check ───────────────────────────────────────────────
$honeypot = trim($_POST['honeypot'] ?? '');
if (!empty($honeypot)) {
    respond(true, 'Thank you! Your message has been sent successfully.', $is_ajax);
}

// ── Sanitization Function ───────────────────────────────────────────────────
function clean_val(string $val, int $len = 500): string
{
    $val = strip_tags($val);
    $val = htmlspecialchars($val, ENT_QUOTES | ENT_HTML5, 'UTF-8');
    return mb_substr(trim($val), 0, $len);
}

// ── Collect and Sanitize Form Inputs ────────────────────────────────────────
$name           = clean_val($_POST['name'] ?? $_POST['fullName'] ?? '', 150);
$phone          = clean_val($_POST['phone'] ?? '', 50);
$email          = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$job            = clean_val($_POST['job'] ?? '', 150);
$project_detail = clean_val($_POST['projectDetail'] ?? '', 200);
$description    = clean_val($_POST['description'] ?? $_POST['message'] ?? '', 5000);

// ── Validation ──────────────────────────────────────────────────────────────
$errors = [];
if (empty($name))           $errors[] = 'Full name is required.';
if (empty($phone))          $errors[] = 'Phone number is required.';
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'A valid email address is required.';
if (empty($job))            $errors[] = 'Job or role is required.';
if (empty($project_detail)) $errors[] = 'Project detail is required.';
if (empty($description))    $errors[] = 'Project description/message is required.';

if (!empty($errors)) {
    respond(false, implode(' ', $errors), $is_ajax, 422);
}

// ── Email Content ───────────────────────────────────────────────────────────
$submitted_at = date('Y-m-d H:i:s T');
$client_ip    = $_SERVER['REMOTE_ADDR'] ?? 'Unknown';
$subject      = "New Contact Inquiry: $name - " . ($project_detail ?: 'EmpireX');

$html_body = "
<!DOCTYPE html>
<html>
<head><meta charset='UTF-8'></head>
<body style='margin:0;padding:24px;background:#F4F6F9;font-family:Arial,Helvetica,sans-serif;'>
  <div style='max-width:600px;margin:0 auto;background:#FFFFFF;border-radius:12px;overflow:hidden;border:1px solid #E2E7EF;'>
    <div style='background:#061A33;padding:26px 24px;text-align:center;'>
      <h2 style='color:#FFFFFF;margin:0 0 6px 0;font-size:20px;'>
        Empire<span style='color:#F5A000;'>X</span> Business Academy
      </h2>
      <p style='color:#F5A000;margin:0;font-size:12px;letter-spacing:1px;text-transform:uppercase;font-weight:bold;'>
        New Website Contact Submission
      </p>
    </div>
    
    <div style='padding:28px 24px;'>
      <table style='width:100%;border-collapse:collapse;font-size:14px;'>
        <tr>
          <td style='padding:10px 0;color:#687386;width:35%;border-bottom:1px solid #F4F6F9;'>Name:</td>
          <td style='padding:10px 0;color:#102033;font-weight:bold;border-bottom:1px solid #F4F6F9;'>$name</td>
        </tr>
        <tr>
          <td style='padding:10px 0;color:#687386;border-bottom:1px solid #F4F6F9;'>Phone:</td>
          <td style='padding:10px 0;color:#102033;font-weight:bold;border-bottom:1px solid #F4F6F9;'>$phone</td>
        </tr>
        <tr>
          <td style='padding:10px 0;color:#687386;border-bottom:1px solid #F4F6F9;'>Email:</td>
          <td style='padding:10px 0;border-bottom:1px solid #F4F6F9;'>
            <a href='mailto:$email' style='color:#061A33;font-weight:bold;text-decoration:none;'>$email</a>
          </td>
        </tr>
        <tr>
          <td style='padding:10px 0;color:#687386;border-bottom:1px solid #F4F6F9;'>Job / Role:</td>
          <td style='padding:10px 0;color:#102033;border-bottom:1px solid #F4F6F9;'>$job</td>
        </tr>
        <tr>
          <td style='padding:10px 0;color:#687386;border-bottom:1px solid #F4F6F9;'>Project Detail:</td>
          <td style='padding:10px 0;color:#061A33;font-weight:bold;border-bottom:1px solid #F4F6F9;'>$project_detail</td>
        </tr>
      </table>

      <div style='margin-top:22px;padding:16px;background:#FFF5DF;border-left:4px solid #F5A000;border-radius:6px;'>
        <h4 style='margin:0 0 8px 0;color:#061A33;font-size:13px;text-transform:uppercase;'>Description &amp; Requirements:</h4>
        <p style='margin:0;color:#102033;font-size:14px;line-height:1.6;'>".nl2br($description)."</p>
      </div>

      <div style='margin-top:24px;padding-top:16px;border-top:1px solid #E2E7EF;font-size:11px;color:#8E99A8;'>
        <p style='margin:0;'>Submitted via EmpireX Business Academy Contact Form</p>
        <p style='margin:4px 0 0 0;'>Date: $submitted_at | IP: $client_ip</p>
      </div>
    </div>
  </div>
</body>
</html>
";

$plain_body = "New Contact Inquiry - EmpireX Business Academy\n"
            . "Name: $name\n"
            . "Phone: $phone\n"
            . "Email: $email\n"
            . "Job: $job\n"
            . "Project Detail: $project_detail\n\n"
            . "Description:\n$description\n\n"
            . "Date: $submitted_at | IP: $client_ip\n";

// ── Check PHPMailer (if SMTP credentials configured) ────────────────────────
$composer_autoload = dirname(__DIR__) . '/vendor/autoload.php';
$smtp_user = defined('SMTP_USER') ? SMTP_USER : '';
$smtp_pass = defined('SMTP_PASS') ? SMTP_PASS : '';

if (!empty($smtp_user) && !empty($smtp_pass) && file_exists($composer_autoload)) {
    require_once $composer_autoload;
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = defined('SMTP_HOST') ? SMTP_HOST : 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = $smtp_user;
        $mail->Password   = $smtp_pass;
        $mail->Port       = defined('SMTP_PORT') ? (int)SMTP_PORT : 587;
        $mail->SMTPSecure = (defined('SMTP_ENCRYPTION') && SMTP_ENCRYPTION === 'ssl')
            ? PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS
            : PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;

        $mail->setFrom($smtp_user, $business_name);
        $mail->addAddress($recipient_email, $business_name);
        $mail->addReplyTo($email, $name);

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $html_body;
        $mail->AltBody = $plain_body;
        $mail->send();

        $_SESSION['empirex_form_timestamps'][] = time();
        respond(true, 'Thank you! Your message has been sent successfully to EmpireX Business Academy.', $is_ajax);
    } catch (\Exception $e) {
        error_log('EmpireX PHPMailer Error: ' . $e->getMessage());
    }
}

// ── Native PHP mail() Dispatch ──────────────────────────────────────────────
$headers   = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/html; charset=UTF-8';
$headers[] = "From: $business_name <$recipient_email>";
$headers[] = "Reply-To: $name <$email>";
$headers[] = 'X-Mailer: PHP/' . phpversion();

$mail_sent = @mail($recipient_email, $subject, $html_body, implode("\r\n", $headers));

if ($mail_sent) {
    $_SESSION['empirex_form_timestamps'][] = time();
    respond(true, 'Thank you! Your message has been sent successfully to EmpireX Business Academy.', $is_ajax);
} else {
    respond(false, 'Unable to send message right now. Please email empirexbusinessacademy577@gmail.com directly.', $is_ajax, 500);
}
