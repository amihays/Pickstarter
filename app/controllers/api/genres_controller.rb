class Api::GenresController < ApplicationController
  def index
    @genres = Genre.all
  end

  def show
    @genre = Genre.includes(:projects).find(params[:id])
    render :show
  end

  private
  def genre_params
    params.require(:genre).permit(:id, :name)
  end
end
