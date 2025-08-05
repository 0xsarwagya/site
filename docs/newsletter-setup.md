# Newsletter Setup Guide

This guide will walk you through setting up the newsletter subscription feature with Firebase Firestore.

## Prerequisites

1. A Firebase project (create one at [Firebase Console](https://console.firebase.google.com/))
2. Node.js and npm installed
3. Basic understanding of Next.js and Firebase

## Firebase Setup

### 1. Create a Firebase Project
1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" and follow the setup wizard
3. Enable Google Analytics if desired (optional)

### 2. Set Up Firestore Database
1. In the Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Start in test mode for development (you can update security rules later)
4. Choose a location close to your users

### 3. Get Your Firebase Configuration
1. In the Firebase Console, go to Project Settings (gear icon)
2. Under "Your apps", click on the web app (or create one if needed)
3. Copy the Firebase configuration object

### 4. Set Up Environment Variables
1. Copy `.env.example` to `.env.local`
   ```bash
   cp .env.example .env.local
   ```
2. Update the values in `.env.local` with your Firebase configuration

## Security Rules (Recommended)

Update your Firestore security rules to secure the newsletter subscriptions:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /newsletterSubscriptions/{subscription} {
      // Allow read only if authenticated as admin
      allow read: if request.auth != null && 
                  get(/databases/$(database)/documents/admins/$(request.auth.uid)).data.isAdmin == true;
      
      // Allow creating new subscriptions
      allow create: if request.resource.data.email is string &&
                    request.resource.data.email.matches('^[^\s@]+@[^\s@]+\\.[^\s@]+$') &&
                    request.resource.data.status == 'active' &&
                    request.resource.data.subscribedAt == request.time;
    }
  }
}
```

## Using the Newsletter Component

Import and use the `Newsletter` component in your pages:

```tsx
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <div>
      {/* Your page content */}
      <Newsletter />
    </div>
  );
}
```

## Customization

You can customize the appearance by modifying the `Newsletter` component's JSX. The component accepts the following optional props:

- `className`: Additional CSS classes
- `title`: Custom title text
- `description`: Custom description text
- `buttonText`: Custom button text

## Testing

1. Start your development server:
   ```bash
   npm run dev
   ```
2. Navigate to a page with the newsletter component
3. Try subscribing with a test email
4. Verify the subscription appears in your Firestore database

## Deployment

1. Set up Firebase Hosting (optional but recommended)
2. Update Firestore security rules for production
3. Deploy your Next.js application

## Troubleshooting

- **Firebase not initialized**: Make sure your environment variables are correctly set in `.env.local`
- **Permission denied**: Check your Firestore security rules
- **CORS issues**: Ensure your domain is whitelisted in Firebase Console

## Security Considerations

- Never expose your Firebase Admin credentials in client-side code
- Use appropriate security rules for production
- Consider implementing rate limiting
- Regularly review and clean up old subscriptions
