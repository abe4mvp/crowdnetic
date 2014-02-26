class FibsController < ApplicationController
  respond_to :json, :xml

  def show

  	@fibonacci = recursive_fib params[:id].to_i

  	respond_to do |format|
  		format.json { render json: { f: @fibonacci } }
  		format.xml { render xml: { "Fibonacci" => @fibonacci}.to_xml(:root => "Fibonacci", :skip_types => true) }
  	end
  end
  
  
  def index
  end
end
