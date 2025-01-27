module Api::V1
   class UsersController < ApplicationController
        def create
            @user = User.new(user_params)

            if @user.save
                login(@user)
                render json: @user.to_json(:only => [:id, :name, :email])
            else
                render json: @user.errors.full_messages, status: 422
            end
        end

        def show
            @user = User.find_by(id: params[:id])
            if @user
                render json: @user
            else
                render json: @user.errors.full_messages, status: 404
            end
        end

        private
        def user_params
            params.require(:user).permit(:first_name, :last_name, :email, :password)
        end
    end
end