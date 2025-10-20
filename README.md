
# Cruise Landing Page

A **fully responsive, modern cruise booking landing page** built using **React**, **Tailwind CSS**, and **PHP (PHPMailer)**.  
Includes a dynamic enquiry form that sends submissions directly to your email using SMTP.

---

## Tech Stack

### Frontend
- **React.js**
- **Tailwind CSS**
- **Heroicons**
- **react-phone-input-2**
- **libphonenumber-js**

### Backend
- **PHP**
- **PHPMailer (SMTP Email Integration)**

---

## ✨ Features

-  Elegant hero banner with enquiry form  
-  About section describing the cruise experience  
-  Packages (4 Nights / 7 Nights)  
-  Cruise itinerary (day-wise details)  
-  Gallery with responsive layout  
-  Nearby attractions (card grid)  
-  Testimonials section  
-  Contact form with real-time validation  
-  SMTP integration for email submission  
-  Fully responsive (Desktop, Tablet, Mobile)

---

## Form Fields

| Field | Type | Description |
|-------|------|-------------|
| First Name | Text | Required |
| Last Name | Text | Required |
| Email | Email | Required |
| Phone | Input with country code | Required |
| Date of Birth | Date | Required |
| Marital Status | Dropdown | Required |
| Passport | Text | Required |
| Package | Dropdown | Required |
| Message | Textarea | Optional |
| Consent | Checkbox | optional |

---

## SMTP Configuration (Using Gmail + PHPMailer)

### Step 1: Open `backend/sendMail.php`

## Sample Email & App Password (For Testing Only)

You can use the sample Gmail account below to test the enquiry form:

// SMTP Configuration (Sample Account)  
$mail->isSMTP();  
$mail->Host = 'smtp.gmail.com';  
$mail->SMTPAuth = true;  
$mail->Username = 'karma.cruise.info@gmail.com'; // Sample email created for testing  
$mail->Password = 'womdcgbflnmajovq';           // App password for testing only  
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;  
$mail->Port = 587;  

// Receiver email — change this to your own inbox  
$mail->addAddress('your-email@example.com');  


⚠️ Note:

This sample email was created specifically for testing the Cruise Landing Page form.

The receiver email can be changed to any inbox you want to receive test submissions.


## 💻 How to Run Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Lokesh516/cruise-landing-page
cd cruise-landing-page
Navigate to the frontend folder:
cd frontend
```

### 2️⃣ Install Frontend Dependencies
```bash
npm install
npm run dev
```

### 3️⃣ Setup Backend (PHP Server)
- Copy the `backend` folder to your PHP server directory (e.g., `htdocs` for XAMPP).
- Run Apache from your local server (e.g., XAMPP Control Panel).
- Ensure `sendMail.php` is accessible via:  
  `http://localhost/cruise-landing-page/backend/sendMail.php`

### 4️⃣ Test Form Submission
- Fill out the enquiry form and submit.
- Check your inbox for the email notification.

---

##  SMTP Setup Notes

If using Gmail, you **must** generate an App Password:  
- Go to [Google Account → Security → App Passwords](https://myaccount.google.com/apppasswords)  
- Select "Mail" and "Other (Custom name)"  
- Copy the generated 16-character password and use it as `$mail->Password`

Allow "Less secure app access" is no longer supported — **App Passwords are required.**

---


