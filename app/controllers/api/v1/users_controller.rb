module Api::V1
   class UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
        login(@user)
        render json: @user
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

    #   def update
    #     @user = User.find_by(id: params[:user][:id])
        
    #     if @user.update_attributes(user_params)
    #       render :show
    #     else
    #       render json: @user.errors.full_messages, status: 422
    #     end
    #   end

    private
    def user_params
        params.require(:user).permit(:name, :password, :email)
    end
    #   def user_params
    #     params.require(:user).permit(:name, :password, :email, :id)
    #   end
    end
end