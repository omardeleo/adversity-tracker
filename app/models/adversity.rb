class Adversity < ActiveRecord::Base
    # has_many :feelings,
    #     primary_key: :id,
    #     foreign_key: :adversity_id,
    #     class_name: 'Feeling'

    belongs_to :user, 
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'User'
end