# Cookie Consent System - Test Instructions

## ✅ Fixes Applied

The hydration mismatch issues have been resolved by:

1. **Added `isMounted` state to CookieConsent component** - Prevents rendering during SSR
2. **Updated `useCookiePreferences` hook** - Initializes with default values instead of reading localStorage during SSR
3. **Added `isLoaded` state** - Tracks when client-side data has been loaded
4. **Improved localStorage handling** - All localStorage operations are now client-side only

## 🧪 Testing the Cookie Consent System

### Test Pages Available:

- **Homepage**: http://localhost:3000 (Cookie banner should appear on first visit)
- **Test Page**: http://localhost:3000/test-cookies (Debug and test functionality)
- **Cookie Preferences**: http://localhost:3000/cookie-preferences (Manage cookie settings)

### Test Scenarios:

#### 1. First Visit (New User)

1. Open browser in incognito mode
2. Visit http://localhost:3000
3. ✅ Cookie banner should appear at the bottom
4. ✅ No hydration mismatch errors in console

#### 2. Accept All Cookies

1. Click "Accept All Cookies" button
2. ✅ Banner should disappear
3. ✅ Analytics and marketing cookies should be enabled
4. ✅ Refresh page - banner should NOT appear again

#### 3. Decline Optional Cookies

1. Clear browser data or use new incognito window
2. Visit homepage
3. Click "Cookie Settings" → "Decline Optional"
4. ✅ Only essential cookies should be enabled
5. ✅ Banner should disappear

#### 4. Custom Preferences

1. Clear browser data or use new incognito window
2. Visit homepage
3. Click "Cookie Settings"
4. Navigate to cookie preferences page
5. Toggle specific cookie types
6. ✅ Settings should be saved and persist

#### 5. Reset for Testing

- Visit: http://localhost:3000/test-cookies
- Click "Clear Storage" button
- Refresh any page to see cookie banner again

## 🔍 Debugging

### Browser Developer Tools:

1. Open F12 Developer Tools
2. Check Console for errors
3. Go to Application → Local Storage
4. Look for these keys:
   - `cookieConsent`: "accepted" | "declined" | null
   - `cookieConsentDate`: ISO date string
   - `cookiePreferences`: JSON object with cookie settings

### Expected Console Output:

- ✅ No hydration mismatch warnings
- ✅ Cookie consent flow logs (when debug is enabled)
- ✅ "Analytics cookies accepted - initializing tracking" (when analytics enabled)

## � Google Analytics Integration (G-FRQZ0XBBKY)

### GDPR-Compliant Analytics Setup:

- ✅ **Consent-Based Loading**: GA scripts only load when analytics cookies are accepted
- ✅ **Consent Mode**: Uses Google Consent Mode v2 for compliance
- ✅ **Dynamic Control**: Analytics can be enabled/disabled based on user preferences
- ✅ **Proper Initialization**: gtag configured with consent defaults

### Testing Google Analytics:

#### 1. Accept Analytics Cookies

1. Clear browser data and visit homepage
2. Click "Accept All Cookies"
3. ✅ Check console: "🔍 Analytics cookies accepted - Google Analytics enabled"
4. ✅ Check Network tab: gtag.js should be loaded
5. ✅ Check Application > Local Storage: analytics: true

#### 2. Decline Analytics Cookies

1. Clear browser data and visit homepage
2. Click "Cookie Settings" → "Decline Optional"
3. ✅ Check console: "🚫 Analytics cookies declined - Google Analytics disabled"
4. ✅ GA scripts should NOT be loaded
5. ✅ Check Local Storage: analytics: false

#### 3. Change Analytics Preferences

1. Visit /cookie-preferences page
2. Toggle "Analytics Cookies" setting
3. ✅ Console should show enable/disable messages
4. ✅ GA consent should update accordingly

### Verification Tools:

- **Google Analytics Real-time**: Check if visits appear in GA dashboard
- **GA Debugger Extension**: Verify tracking events
- **Network Tab**: Confirm gtag.js loads only with consent
- **Console Logs**: Monitor consent status changes

## 🚀 System Status: PRODUCTION READY

The complete system now includes:

- ✅ GDPR compliance features
- ✅ SSR compatibility (no hydration issues)
- ✅ Persistent user preferences
- ✅ Proper consent management
- ✅ **Google Analytics Integration (G-FRQZ0XBBKY)**
- ✅ **Consent Mode v2 Support**
- ✅ Responsive design
- ✅ Accessibility features

All hydration mismatch errors have been resolved and Google Analytics is properly integrated with consent management!
