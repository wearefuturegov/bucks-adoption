# -*- encoding: utf-8 -*-
# stub: judge-simple_form 1.0.0 ruby lib

Gem::Specification.new do |s|
  s.name = "judge-simple_form".freeze
  s.version = "1.0.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Joe Corcoran".freeze]
  s.date = "2015-05-10"
  s.description = "Easily add Judge client side validation to your SimpleForm forms.".freeze
  s.email = "joe@tribesports.com".freeze
  s.homepage = "http://github.com/joecorcoran/judge-simple_form".freeze
  s.rubygems_version = "3.1.4".freeze
  s.summary = "SimpleForm adapter for Judge".freeze

  s.installed_by_version = "3.1.4" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<judge>.freeze, ["~> 2.0"])
    s.add_runtime_dependency(%q<simple_form>.freeze, [">= 2.0"])
    s.add_development_dependency(%q<rake>.freeze, [">= 0"])
    s.add_development_dependency(%q<sqlite3>.freeze, ["~> 1.3"])
    s.add_development_dependency(%q<rspec>.freeze, ["~> 2.13"])
    s.add_development_dependency(%q<nokogiri>.freeze, ["~> 1.6"])
    s.add_development_dependency(%q<appraisal>.freeze, ["~> 2.0.0"])
  else
    s.add_dependency(%q<judge>.freeze, ["~> 2.0"])
    s.add_dependency(%q<simple_form>.freeze, [">= 2.0"])
    s.add_dependency(%q<rake>.freeze, [">= 0"])
    s.add_dependency(%q<sqlite3>.freeze, ["~> 1.3"])
    s.add_dependency(%q<rspec>.freeze, ["~> 2.13"])
    s.add_dependency(%q<nokogiri>.freeze, ["~> 1.6"])
    s.add_dependency(%q<appraisal>.freeze, ["~> 2.0.0"])
  end
end
