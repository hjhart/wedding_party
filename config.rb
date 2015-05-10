require "zurb-foundation"
preferred_syntax = :scss


set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :cache_buster

  # Use relative URLs
  # activate :relative_assets

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end

activate :deploy do |deploy|
  deploy.method = :git
end

after_configuration do
  zurb_foundation_root = Middleman.rubygems_latest_specs.map(&:full_gem_path).grep(/zurb-foundation-4/).first
  zurb_foundation_root or raise "Couldn't find zurb-foundation gem root"
  sprockets.append_path("#{zurb_foundation_root}/js")
end