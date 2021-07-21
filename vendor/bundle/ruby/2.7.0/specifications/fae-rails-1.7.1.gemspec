# -*- encoding: utf-8 -*-
# stub: fae-rails 1.7.1 ruby lib

Gem::Specification.new do |s|
  s.name = "fae-rails".freeze
  s.version = "1.7.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["FINE".freeze]
  s.date = "2018-01-19"
  s.description = "CMS for Rails. For Reals.".freeze
  s.email = ["fae@wearefine.com".freeze]
  s.homepage = "https://github.com/wearefine/fae".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.1.4".freeze
  s.summary = "CMS for Rails. For Reals.".freeze

  s.installed_by_version = "3.1.4" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<rails>.freeze, [">= 4.1"])
    s.add_runtime_dependency(%q<jquery-rails>.freeze, [">= 3.1.1"])
    s.add_runtime_dependency(%q<sass>.freeze, [">= 3.4.0"])
    s.add_runtime_dependency(%q<sass-rails>.freeze, [">= 5.0.3"])
    s.add_runtime_dependency(%q<uglifier>.freeze, [">= 0"])
    s.add_runtime_dependency(%q<acts_as_list>.freeze, ["~> 0.9.0"])
    s.add_runtime_dependency(%q<browser>.freeze, ["~> 0.8.0"])
    s.add_runtime_dependency(%q<carrierwave>.freeze, ["~> 0.11.0"])
    s.add_runtime_dependency(%q<devise>.freeze, [">= 3.4.1"])
    s.add_runtime_dependency(%q<jquery-ui-rails>.freeze, ["~> 4.2.1"])
    s.add_runtime_dependency(%q<judge>.freeze, ["~> 2.1.1"])
    s.add_runtime_dependency(%q<judge-simple_form>.freeze, ["~> 1.0.0"])
    s.add_runtime_dependency(%q<kaminari>.freeze, ["~> 1.1.1"])
    s.add_runtime_dependency(%q<remotipart>.freeze, ["~> 1.3.1"])
    s.add_runtime_dependency(%q<rmagick>.freeze, ["~> 2.16.0"])
    s.add_runtime_dependency(%q<simple_form>.freeze, [">= 3.1.0"])
    s.add_runtime_dependency(%q<slim>.freeze, [">= 0"])
    s.add_development_dependency(%q<appraisal>.freeze, [">= 0"])
    s.add_development_dependency(%q<better_errors>.freeze, [">= 0"])
    s.add_development_dependency(%q<binding_of_caller>.freeze, [">= 0"])
    s.add_development_dependency(%q<rails-perftest>.freeze, [">= 0"])
    s.add_development_dependency(%q<ruby-prof>.freeze, [">= 0"])
    s.add_development_dependency(%q<thin>.freeze, [">= 0"])
  else
    s.add_dependency(%q<rails>.freeze, [">= 4.1"])
    s.add_dependency(%q<jquery-rails>.freeze, [">= 3.1.1"])
    s.add_dependency(%q<sass>.freeze, [">= 3.4.0"])
    s.add_dependency(%q<sass-rails>.freeze, [">= 5.0.3"])
    s.add_dependency(%q<uglifier>.freeze, [">= 0"])
    s.add_dependency(%q<acts_as_list>.freeze, ["~> 0.9.0"])
    s.add_dependency(%q<browser>.freeze, ["~> 0.8.0"])
    s.add_dependency(%q<carrierwave>.freeze, ["~> 0.11.0"])
    s.add_dependency(%q<devise>.freeze, [">= 3.4.1"])
    s.add_dependency(%q<jquery-ui-rails>.freeze, ["~> 4.2.1"])
    s.add_dependency(%q<judge>.freeze, ["~> 2.1.1"])
    s.add_dependency(%q<judge-simple_form>.freeze, ["~> 1.0.0"])
    s.add_dependency(%q<kaminari>.freeze, ["~> 1.1.1"])
    s.add_dependency(%q<remotipart>.freeze, ["~> 1.3.1"])
    s.add_dependency(%q<rmagick>.freeze, ["~> 2.16.0"])
    s.add_dependency(%q<simple_form>.freeze, [">= 3.1.0"])
    s.add_dependency(%q<slim>.freeze, [">= 0"])
    s.add_dependency(%q<appraisal>.freeze, [">= 0"])
    s.add_dependency(%q<better_errors>.freeze, [">= 0"])
    s.add_dependency(%q<binding_of_caller>.freeze, [">= 0"])
    s.add_dependency(%q<rails-perftest>.freeze, [">= 0"])
    s.add_dependency(%q<ruby-prof>.freeze, [">= 0"])
    s.add_dependency(%q<thin>.freeze, [">= 0"])
  end
end
