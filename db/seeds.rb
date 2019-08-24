# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Adversity.destroy_all
Feeling.destroy_all
Recognition.destroy_all

User.create(name: "Dean Dibbert", email: "dean@mocha.me", password: "password")

user = User.last

Adversity.create(title: "Trouble at work", user_id: user.id)
adv = Adversity.last

Recognition.create(adversity_id: adv.id, story: "Afraid I'll get fired")
r = Recognition.last
r.created_at = DateTime.new(2019, 8, 1, 1, 2, 3)
r.save!

Recognition.create(adversity_id: adv.id, story: "Work is miserable")
r = Recognition.last
r.created_at = DateTime.new(2019, 8, 3, 3, 2, 1)
r.save!

Recognition.create(adversity_id: adv.id, story: "Not sure how much longer")
r = Recognition.last
r.created_at = DateTime.new(2019, 8, 9, 3, 4, 5)
r.save!

Adversity.create(title: "Lost a loved one", user_id: user.id)
adv = Adversity.last
Recognition.create(adversity_id: adv.id, story: "Their loss is really felt")
r = Recognition.last
r.created_at = DateTime.new(2019, 8, 1, 18, 10, 3)
r.save!

Adversity.create(title: "Fought with my partner", user_id: user.id)
adv = Adversity.last
Recognition.create(adversity_id: adv.id, story: "We're just not getting along")
r = Recognition.last
r.created_at = DateTime.new(2019, 8, 2, 9, 15, 3)
r.save!

Recognition.create(adversity_id: adv.id, story: "Still fighting")
r = Recognition.last
r.created_at = DateTime.new(2019, 8, 9, 19, 15, 3)
r.save!

Adversity.create(title: "Surgery isn't healing well", user_id: user.id)
adv = Adversity.last
Recognition.create(adversity_id: adv.id, story: "It's so frustrating I just want to walk")
r = Recognition.last
r.created_at = DateTime.new(2019, 8, 3, 14, 15, 3)
r.save!

Adversity.create(title: "Having trouble at school", user_id: user.id)
adv = Adversity.last
Recognition.create(adversity_id: adv.id, story: "This semester is really kicking my butt")
r = Recognition.last
r.created_at = DateTime.new(2019, 8, 7, 18, 10, 3)
r.save!

Recognition.create(adversity_id: adv.id, story: "Ok maybe this is not so bad")
r = Recognition.last
r.created_at = DateTime.new(2019, 8, 14, 18, 10, 3)
r.save!

Adversity.create(title: "Can't keep up with bills", user_id: user.id)
adv = Adversity.last
Recognition.create(adversity_id: adv.id, story: "How am I going to pay all these bills?")
r = Recognition.last
r.created_at = DateTime.new(2019, 8, 9, 9, 10, 3)
r.save!



