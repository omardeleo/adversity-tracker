class Adversity < ActiveRecord::Base
    belongs_to :user
    has_many :recognitions
end