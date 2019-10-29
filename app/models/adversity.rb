class Adversity < ActiveRecord::Base
    belongs_to :user
    has_many :recognitions
    has_many :beliefs
end