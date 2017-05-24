const formatting		= require('../index.js');

formatting.setOptions({
	links:		{
		/*
			If you want a Whitelistening, you can fill out these options.
			if you set `whitelist` to `false`, the whitelist will be disabled.
		*/
		whitelist:	{
			/*
				Whitelisted domains
			*/
			domains:	[
				'steampowered.com'
			],
			/*
				If you want a leave-page (when the domain is not whitelisted), than add it here.
			*/
			referer:	'http://test.example.com/redirect=',
			/*
				If you want to remove the non-whitelisted link, set it to `true` otherwise, the `[url]`-code will be shown as source
			*/
			remove:		false
		},
		/*
			Open link in new Tab (target="_blank")?
		*/
		blank:		true
	},
});

var content = '[url=http://google.com]Google-Link[/url][url="http://steampowered.com"]Steam-Link[/url]';

console.log(formatting.format(content));