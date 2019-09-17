module Api::V1
    class SessionsController < ApplicationController
        def check
            @user = current_user
            if @user
                head :ok
            else
                render json: ["Nobody signed in"], status: 404
            end
        end

        def create
            @user = User.find_by_credentials(
                params[:user][:email],
                params[:user][:password]
            )

            if @user
                login(@user)
                render json: @user
            else
                render json: ["Invalid email/password combination"], status: 401
            end
        end

        def destroy
            @user = current_user
            if @user
                logout
                render json: @user
            else
                render json: ["Nobody signed in"], status: 404
            end
        end
    end
end