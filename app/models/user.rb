class User < ApplicationRecord
    
    attr_reader :password

    validates :first_name, :last_name, :email, :password_digest, :session_token, presence: true
    validates :email, 
        uniqueness: true, 
        length: { maximum: 30 }, 
        format: { with: URI::MailTo::EMAIL_REGEXP, message: 'Invalid email' } 
    validates :first_name, :last_name, length: { maximum: 30 }
    validates :password, length: { minimum: 6, maximum: 30 }, allow_nil: true

    after_initialize :ensure_session_token

    has_many :adversities

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def reset_session_token!
        generate_unique_session_token
        save!
        self.session_token
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    private

    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end

    def new_session_token
        SecureRandom.urlsafe_base64
    end

    def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
            self.session_token = new_session_token
        end
        self.session_token
    end
end