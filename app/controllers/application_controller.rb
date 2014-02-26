class ApplicationController < ActionController::Base
  protect_from_forgery
  include FibsHelper
  def index
  end
end
