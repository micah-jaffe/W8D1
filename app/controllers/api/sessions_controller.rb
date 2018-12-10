class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      session[:user][:username],
      session[:user][:password]
    )

    if @user
      login!(@user)
      render "api/users/show"
    else
      render :json ["Invalid credentials"], status: 401
    end
  end

  def destroy
    logout!
    render "api/users/show"
  end
end
