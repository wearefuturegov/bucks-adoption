namespace :fae do
  desc "Seeds the parent app with Fae's defaults"
  task :seed_db => :environment do
    Fae::Role.delete_all
    Fae::Role.create(name: 'super admin', position: 0)
    Fae::Role.create(name: 'admin', position: 1)
    Fae::Role.create(name: 'user', position: 2)

    if Fae::Option.first.blank?
      option = Fae::Option.new({
        title: 'Bucks Adoption',
        singleton_guard: 0,
        time_zone: 'GMT',
        live_url: 'https://www.buckinghamshire.gov.uk/care-children-and-families/adoption/'
        })
      option.save!
    end
  end
end
