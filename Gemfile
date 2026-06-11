source 'https://rubygems.org'
group :jekyll_plugins do
    gem 'jekyll'
    gem 'jekyll-email-protect'
    gem 'jekyll-feed'
    gem 'jekyll-link-attributes'
    gem 'jekyll-minifier'
    gem 'jekyll-scholar'
    gem 'jekyll-sitemap'
    gem 'jekyll-redirect-from'
    gem 'jemoji'
    gem 'mini_racer', '< 0.21.2' # 0.21.2 requires Ruby >= 3.3; CI/deploy runs 3.2.2
    gem 'unicode_utils'
    gem 'webrick'
end
group :test do
    gem 'html-proofer', '~> 5.0'
    # html-proofer's async stack; newer versions require Ruby >= 3.3 but CI runs 3.2.2
    gem 'async', '< 2.38'
    gem 'console', '< 1.35'
    gem 'io-event', '< 1.12'
end
