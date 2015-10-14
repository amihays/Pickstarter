class Api::GenresController < ApplicationController
  def index
    @genres = Genre.all
  end

  def show

  end

  private
  def genre_params
    params.require(:genre).permit(:id, :name)
  end
end