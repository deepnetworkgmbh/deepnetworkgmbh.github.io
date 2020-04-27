---
title: Home
layout: default
---
<script>

   // gets default language cookie
   function getLanguageCookie() {
      var nameEQ = "lang=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
         var c = ca[i];
         while (c.charAt(0)==' ') c = c.substring(1,c.length);
         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
   }

   var languages = ['de', 'en'];
   var defaultLanguage = 'de';

   // detect browser language
   var language = navigator.languages && navigator.languages[0] || // Chrome / Firefox
               navigator.language ||   // All browsers
               navigator.userLanguage; // IE <= 10

   // get 2 char language code
   var code = language ? language.substring(0,2) : defaultLanguage;

   // if code is not within supported languages, pick default
   if (languages.indexOf(code) === -1) {
      code = defaultLanguage;
   }

   var langByCookie = getLanguageCookie();
   if (langByCookie !== null) {
      console.log(`lang ${langByCookie} found on cookie`);
      code = langByCookie;
   }

   // redirect user
   window.location.href = '/' + code;
</script>
