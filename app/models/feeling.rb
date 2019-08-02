class Feeling < ActiveRecord::Base
    belongs_to :adversity, 
        primary_key: :id,
        foreign_key: :adversity_id,
        class_name: 'Adversity'
end