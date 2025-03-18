from flask import Flask, render_template, request

app = Flask(__name__)

# 示例饰品数据
skins = [
    {"id": 1, "name": "AK-47 | Redline", "price": 50.0},
    {"id": 2, "name": "AWP | Asiimov", "price": 200.0},
    {"id": 3, "name": "M4A4 | Howl", "price": 1500.0}
]

@app.route('/')
def home():
    return render_template('index.html', skins=skins)

@app.route('/search')
def search():
    query = request.args.get('q', '')
    filtered_skins = [skin for skin in skins if query.lower() in skin['name'].lower()]
    return render_template('index.html', skins=filtered_skins, query=query)

@app.route('/skin/<int:skin_id>')
def skin_detail(skin_id):
    skin = next((s for s in skins if s['id'] == skin_id), None)
    if not skin:
        return "Skin not found", 404
    return render_template('skin_detail.html', skin=skin)

if __name__ == '__main__':
    app.run(debug=True)
