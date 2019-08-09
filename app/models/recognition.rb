class Recognition < ActiveRecord::Base
    belongs_to :adversity
    has_many :feelings
    has_one :story
end