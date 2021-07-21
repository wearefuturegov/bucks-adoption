# -*- encoding: utf-8 -*-
# stub: mail-notify 1.0.4 ruby lib

Gem::Specification.new do |s|
  s.name = "mail-notify".freeze
  s.version = "1.0.4"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Stuart Harrison".freeze]
  s.bindir = "exe".freeze
  s.date = "2021-01-28"
  s.email = ["pezholio@gmail.com".freeze]
  s.homepage = "https://github.com/dxw/mail-notify".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.1.4".freeze
  s.summary = "ActionMailer support for the GOV.UK Notify API".freeze

  s.installed_by_version = "3.1.4" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_development_dependency(%q<bundler>.freeze, ["~> 2.0"])
    s.add_development_dependency(%q<coveralls>.freeze, ["~> 0.8.22"])
    s.add_development_dependency(%q<pry>.freeze, ["~> 0.12.0"])
    s.add_development_dependency(%q<rails>.freeze, ["~> 6.0"])
    s.add_development_dependency(%q<rake>.freeze, ["~> 12.3.3"])
    s.add_development_dependency(%q<rspec-rails>.freeze, ["~> 3.8"])
    s.add_development_dependency(%q<standard>.freeze, ["= 0.4.7"])
    s.add_development_dependency(%q<sqlite3>.freeze, ["~> 1.4.1"])
    s.add_development_dependency(%q<webmock>.freeze, ["~> 3.7.6"])
    s.add_runtime_dependency(%q<actionmailer>.freeze, [">= 5.2.4.3"])
    s.add_runtime_dependency(%q<activesupport>.freeze, [">= 5.2.4.3"])
    s.add_runtime_dependency(%q<actionpack>.freeze, [">= 5.2.4.3"])
    s.add_runtime_dependency(%q<actionview>.freeze, [">= 5.2.4.3"])
    s.add_runtime_dependency(%q<notifications-ruby-client>.freeze, ["~> 5.1"])
    s.add_runtime_dependency(%q<rack>.freeze, [">= 2.1.4"])
  else
    s.add_dependency(%q<bundler>.freeze, ["~> 2.0"])
    s.add_dependency(%q<coveralls>.freeze, ["~> 0.8.22"])
    s.add_dependency(%q<pry>.freeze, ["~> 0.12.0"])
    s.add_dependency(%q<rails>.freeze, ["~> 6.0"])
    s.add_dependency(%q<rake>.freeze, ["~> 12.3.3"])
    s.add_dependency(%q<rspec-rails>.freeze, ["~> 3.8"])
    s.add_dependency(%q<standard>.freeze, ["= 0.4.7"])
    s.add_dependency(%q<sqlite3>.freeze, ["~> 1.4.1"])
    s.add_dependency(%q<webmock>.freeze, ["~> 3.7.6"])
    s.add_dependency(%q<actionmailer>.freeze, [">= 5.2.4.3"])
    s.add_dependency(%q<activesupport>.freeze, [">= 5.2.4.3"])
    s.add_dependency(%q<actionpack>.freeze, [">= 5.2.4.3"])
    s.add_dependency(%q<actionview>.freeze, [">= 5.2.4.3"])
    s.add_dependency(%q<notifications-ruby-client>.freeze, ["~> 5.1"])
    s.add_dependency(%q<rack>.freeze, [">= 2.1.4"])
  end
end
