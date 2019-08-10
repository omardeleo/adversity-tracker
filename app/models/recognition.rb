class Recognition < ActiveRecord::Base
    belongs_to :adversity
    has_many :feelings
end