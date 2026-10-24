<?php
/**
 * EmpireX Business Academy – Single-File Contact Form & PHP Processor
 * 
 * Form & PHP Backend directly attached in one file.
 * All submissions are delivered directly to empirexbusinessacademy577@gmail.com
 * No database required.
 */

$status = 'idle';
$message = '';
$recipient_email = 'empirexbusinessacademy577@gmail.com';
$business_name   = 'EmpireX Business Academy';

// Form input placeholders
$name           = '';
$phone          = '';
$email          = '';
$job            = '';
$project_detail = '';
$description    = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // ── Anti-Spam: Honeypot ──────────────────────────────────────────────────
    if (!empty($_POST['honeypot'])) {
        $status = 'success';
        $message = 'Thank you! Your message has been sent successfully.';
    } else {
        // ── Sanitize ────────────────────────────────────────────────────────
        $name           = htmlspecialchars(strip_tags(trim($_POST['name'] ?? '')), ENT_QUOTES, 'UTF-8');
        $phone          = htmlspecialchars(strip_tags(trim($_POST['phone'] ?? '')), ENT_QUOTES, 'UTF-8');
        $email          = filter_var(trim($_POST['email'] ?? ''), FILTER_SANITIZE_EMAIL);
        $job            = htmlspecialchars(strip_tags(trim($_POST['job'] ?? '')), ENT_QUOTES, 'UTF-8');
        $project_detail = htmlspecialchars(strip_tags(trim($_POST['projectDetail'] ?? '')), ENT_QUOTES, 'UTF-8');
        $description    = htmlspecialchars(strip_tags(trim($_POST['description'] ?? '')), ENT_QUOTES, 'UTF-8');

        // ── Validate ────────────────────────────────────────────────────────
        $errors = [];
        if (empty($name))           $errors[] = 'Name is required.';
        if (empty($phone))          $errors[] = 'Phone number is required.';
        if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'A valid email is required.';
        if (empty($job))            $errors[] = 'Job / Role is required.';
        if (empty($project_detail)) $errors[] = 'Project detail is required.';
        if (empty($description))    $errors[] = 'Description is required.';

        if (!empty($errors)) {
            $status = 'error';
            $message = implode(' ', $errors);
        } else {
            // ── Send Email ──────────────────────────────────────────────────
            $submitted_at = date('Y-m-d H:i:s T');
            $client_ip    = $_SERVER['REMOTE_ADDR'] ?? 'Unknown';
            $subject      = "New Inquiry: $name - $project_detail";

            $html_body = "
            <!DOCTYPE html>
            <html>
            <head><meta charset='UTF-8'></head>
            <body style='margin:0;padding:24px;background:#F4F6F9;font-family:Arial,sans-serif;'>
              <div style='max-width:600px;margin:0 auto;background:#FFFFFF;border-radius:12px;overflow:hidden;border:1px solid #E2E7EF;'>
                <div style='background:#061A33;padding:24px;text-align:center;'>
                  <h2 style='color:#FFFFFF;margin:0 0 4px 0;'>Empire<span style='color:#F5A000;'>X</span> Business Academy</h2>
                  <p style='color:#F5A000;margin:0;font-size:12px;text-transform:uppercase;font-weight:bold;'>New Contact Form Inquiry</p>
                </div>
                <div style='padding:24px;'>
                  <p><strong>Name:</strong> $name</p>
                  <p><strong>Phone:</strong> $phone</p>
                  <p><strong>Email:</strong> <a href='mailto:$email'>$email</a></p>
                  <p><strong>Job / Role:</strong> $job</p>
                  <p><strong>Project Detail:</strong> $project_detail</p>
                  <div style='background:#FFF5DF;border-left:4px solid #F5A000;padding:12px;margin-top:16px;'>
                    <h4 style='margin:0 0 6px 0;color:#061A33;'>Description:</h4>
                    <p style='margin:0;line-height:1.6;'>".nl2br($description)."</p>
                  </div>
                  <p style='color:#8E99A8;font-size:11px;margin-top:20px;'>Submitted: $submitted_at | IP: $client_ip</p>
                </div>
              </div>
            </body>
            </html>";

            $headers   = [];
            $headers[] = 'MIME-Version: 1.0';
            $headers[] = 'Content-Type: text/html; charset=UTF-8';
            $headers[] = "From: $business_name <$recipient_email>";
            $headers[] = "Reply-To: $name <$email>";

            $sent = @mail($recipient_email, $subject, $html_body, implode("\r\n", $headers));

            if ($sent) {
                $status = 'success';
                $message = 'Thank you! Your message has been sent successfully to EmpireX Business Academy.';
                // Reset form values on success
                $name = $phone = $email = $job = $project_detail = $description = '';
            } else {
                $status = 'error';
                $message = 'Unable to send message. Please email empirexbusinessacademy577@gmail.com directly.';
            }
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us | EmpireX Business Academy</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; padding: 0; font-family: 'Plus Jakarta Sans', sans-serif; background-color: #F4F6F9; color: #102033; }
    .header { background: #061A33; color: #FFFFFF; padding: 40px 20px; text-align: center; border-bottom: 2px solid #F5A000; }
    .header h1 { margin: 0; font-size: 28px; font-weight: 800; }
    .header h1 span { color: #F5A000; }
    .header p { margin: 8px 0 0 0; color: #B9C7DA; font-size: 14px; }
    .container { max-width: 680px; margin: 40px auto; padding: 0 20px; }
    .card { background: #FFFFFF; border-radius: 16px; border: 1px solid #E2E7EF; padding: 36px; box-shadow: 0 4px 20px rgba(6,26,51,0.05); }
    .alert { padding: 14px 18px; border-radius: 8px; margin-bottom: 24px; font-size: 14px; font-weight: 500; }
    .alert-success { background: #ECFDF5; color: #065F46; border: 1px solid #A7F3D0; }
    .alert-error { background: #FEF2F2; color: #991B1B; border: 1px solid #FECACA; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 18px; }
    @media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }
    .form-group { margin-bottom: 18px; }
    label { display: block; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #061A33; margin-bottom: 6px; }
    label span { color: #DC2626; }
    input, textarea { width: 100%; padding: 12px 14px; border-radius: 8px; border: 1px solid #E2E7EF; font-family: inherit; font-size: 14px; color: #102033; transition: 0.2s border; background: #FFFFFF; }
    input:focus, textarea:focus { outline: none; border-color: #F5A000; box-shadow: 0 0 0 3px rgba(245, 160, 0, 0.15); }
    button { background: #F5A000; color: #061A33; border: none; font-weight: 800; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; padding: 14px 28px; border-radius: 8px; cursor: pointer; transition: 0.2s; }
    button:hover { background: #DF9100; box-shadow: 0 4px 15px rgba(245, 160, 0, 0.3); }
    .footer { text-align: center; font-size: 12px; color: #687386; margin-top: 24px; }
    .honeypot { display: none; }
  </style>
</head>
<body>

  <div class="header">
    <h1>Empire<span>X</span> Business Academy</h1>
    <p>Direct Contact &amp; Marketplace Project Inquiry</p>
  </div>

  <div class="container">
    <div class="card">
      <?php if ($status === 'success'): ?>
        <div class="alert alert-success">
          ✓ <?php echo $message; ?>
        </div>
      <?php elseif ($status === 'error'): ?>
        <div class="alert alert-error">
          ✕ <?php echo $message; ?>
        </div>
      <?php endif; ?>

      <form method="POST" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">
        <!-- Honeypot Bot Trap -->
        <div class="honeypot">
          <input type="text" name="honeypot" tabindex="-1" autocomplete="off">
        </div>

        <div class="grid">
          <div>
            <label for="name">Name <span>*</span></label>
            <input type="text" id="name" name="name" required value="<?php echo htmlspecialchars($name); ?>" placeholder="Your Full Name">
          </div>
          <div>
            <label for="phone">Phone Number <span>*</span></label>
            <input type="tel" id="phone" name="phone" required value="<?php echo htmlspecialchars($phone); ?>" placeholder="+1 555 123 4567">
          </div>
          <div>
            <label for="email">Email <span>*</span></label>
            <input type="email" id="email" name="email" required value="<?php echo htmlspecialchars($email); ?>" placeholder="yourname@example.com">
          </div>
          <div>
            <label for="job">Job / Role <span>*</span></label>
            <input type="text" id="job" name="job" required value="<?php echo htmlspecialchars($job); ?>" placeholder="e.g. Brand Owner, Seller">
          </div>
        </div>

        <div class="form-group">
          <label for="projectDetail">Project Detail <span>*</span></label>
          <input type="text" id="projectDetail" name="projectDetail" required value="<?php echo htmlspecialchars($project_detail); ?>" placeholder="e.g. Amazon Store Launch, eBay SEO, Etsy Management">
        </div>

        <div class="form-group">
          <label for="description">Description <span>*</span></label>
          <textarea id="description" name="description" rows="5" required placeholder="Describe your project, requirements, or questions in detail..."><?php echo htmlspecialchars($description); ?></textarea>
        </div>

        <div>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>

    <div class="footer">
      <p>&copy; <?php echo date('Y'); ?> EmpireX Business Academy. Submissions routed to empirexbusinessacademy577@gmail.com</p>
    </div>
  </div>

</body>
</html>
