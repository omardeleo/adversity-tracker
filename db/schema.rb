# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_19_194201) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "adversities", force: :cascade do |t|
    t.string "title", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "adversity_date"
    t.index ["user_id"], name: "index_adversities_on_user_id"
  end

  create_table "beliefs", force: :cascade do |t|
    t.integer "adversity_id", null: false
    t.text "belief_text"
    t.integer "control_level"
    t.integer "ability_level"
    t.integer "need_level"
    t.integer "pressure_level"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "need"
    t.string "need_reason"
  end

  create_table "feelings", force: :cascade do |t|
    t.string "name", null: false
    t.integer "intensity", null: false
    t.integer "recognition_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "recognitions", force: :cascade do |t|
    t.integer "adversity_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "story", null: false
    t.datetime "recognition_date"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", limit: 30
    t.string "email", limit: 30, null: false
    t.string "password_digest", null: false
    t.string "session_token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name", limit: 30
    t.string "last_name", limit: 30
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
