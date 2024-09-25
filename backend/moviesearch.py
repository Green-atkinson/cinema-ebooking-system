# TODO: Set-up getting movie data from dabatbase, Connect to frontend
from flask import Flask, request, jsonify

app = Flask(__name__)

# Placeholder movie data, TODO: Connect to database
MOVIES = [
    {"id": 1, "title": "Spider-Man: No Way Home",
     "description": "Blah",
     "releaseDate": "2222-12-22", "isRunning": True},
    {"id": 2, "title": "Avatar: The Way of Water",
     "description": "Blah",
     "releaseDate": "2222-12-22", "isRunning": False},
]


# Route to search movies, TODO: Connect to frontend
@app.route('/movies/search', methods=['GET'])
def search_movies():
    query = request.args.get('query', '').lower()

    # Search simulation
    results = [movie for movie in MOVIES if query in movie['title'].lower() or query in movie['description'].lower()]

    return jsonify(results)


if __name__ == '__main__':
    app.run(debug=True)
