# Contact Form Setup Instructions

The contact form is now fully functional and integrated with **Web3Forms** for email delivery.

## Quick Setup (Required)

### 1. Get Your Web3Forms Access Key
- Visit [web3forms.com](https://web3forms.com) (free service)
- Sign up or log in
- Copy your **Access Key**

### 2. Add the Access Key to `.env.local`
The file `.env.local` has been created with placeholder values. Replace `YOUR_ACCESS_KEY`:

```env
VITE_WEB3FORMS_ACCESS_KEY=YOUR_ACCESS_KEY
VITE_CONTACT_EMAIL=steelpillar92@gmail.com
```

### 3. Test the Form
1. Run `npm run dev` (or restart your dev server if running)
2. Navigate to the Contact page
3. Submit a test message
4. Check your inbox (steelpillar92@gmail.com) for the submission

## Configuration Files

### `.env.local`
- **Purpose**: Store sensitive configuration (not committed to git)
- **Variables**:
  - `VITE_WEB3FORMS_ACCESS_KEY`: Access key from web3forms.com
  - `VITE_CONTACT_EMAIL`: Recipient email address

### `src/config/web3forms.js`
- **Purpose**: Centralized Web3Forms configuration and API integration
- **Functions**:
  - `submitContactForm(formData)`: Submit form via Web3Forms API
  - `isConfigured()`: Check if Web3Forms is properly configured

### `src/components/ui/ContactForm.jsx`
- **Updates**:
  - Client-side validation for name, email, and message
  - Web3Forms API integration via fetch
  - Error handling and display
  - Loading state with "Sending..." button feedback
  - Duplicate submission prevention
  - Success message with reset button
  - Clear error messages

## Features Implemented

✅ Existing form fields and design preserved  
✅ Client-side validation (name, email, message required)  
✅ Loading/submitting state with button feedback  
✅ Duplicate submission prevention  
✅ Clear success message after submission  
✅ Clear error messages on failure  
✅ Form reset after successful submission  
✅ Email configuration in `.env.local` (no hardcoded company email)  
✅ Easy to update when Pillar Steel gets custom domain email  
✅ No new npm dependencies required  

## Updating the Email Later

When Pillar Steel Factory gets its custom domain email (e.g., `contact@pillarsteel.com`):

1. Update `.env.local`:
   ```env
   VITE_CONTACT_EMAIL=contact@pillarsteel.com
   ```

2. Restart the dev server

That's it! No code changes needed.

## Form Fields Submitted

The form collects:
- **Name** (required)
- **Email** (required)
- **Phone** (optional)
- **Subject** (optional)
- **Message** (required, min 10 characters)

## Troubleshooting

**Error: "Web3Forms is not configured"**
- Ensure `.env.local` exists
- Verify `VITE_WEB3FORMS_ACCESS_KEY` is set correctly
- Restart your dev server

**Email not received**
- Check spam/junk folders
- Verify the access key is correct on web3forms.com
- Check Web3Forms dashboard for submission logs

**Form validation not working**
- Name must be at least 2 characters
- Email must be valid format
- Message must be at least 10 characters
