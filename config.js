bot.config(function($sceDelegateProvider,$qProvider) {
	$qProvider.errorOnUnhandledRejections(false);
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'https://api.openweathermap.org/**',
  ]);
	
});