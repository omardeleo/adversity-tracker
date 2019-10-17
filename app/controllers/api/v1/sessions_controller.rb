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
                errors = []
                if params[:user][:email] == ""
                    errors.push("Email can't be blank")
                end
                if params[:user][:password] == ""
                    errors.push("Password can't be blank")
                end
                puts 1
                if params[:user][:email] != "" || params[:user][:password] != ""
                    errors.push("Invalid email/password combination")
                end
                render json: errors, status: 401
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