# TODO: Set-up getting URL from dabatbase, Connect to frontend
from flask import Flask, jsonify

app = Flask(__name__)


# Placeholder movie data, TODO: Connect to database
def get_movie_trailer_url(movie_id):
    return "https://www.youtube.com/embed/JfVOs4VSpmA"


# Route to view trailers, TODO: Connect to frontend
@app.route('/movie/<int:movie_id>/trailer', methods=['GET'])
def get_trailer(movie_id):
    trailer_url = get_movie_trailer_url(movie_id)
    return jsonify({"trailer_url": trailer_url})


if __name__ == "__main__":
    app.run(debug=True)
