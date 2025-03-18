from flask import Flask, jsonify
from flask_cors import CORS
import requests
from datetime import datetime, timedelta
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app)

# 模拟数据生成函数
def generate_mock_data():
    # 生成过去30天的日期
    dates = [(datetime.now() - timedelta(days=x)).strftime('%Y-%m-%d') for x in range(30)]
    # 生成随机价格数据
    base_price = 100
    prices = [base_price + np.random.normal(0, 10) for _ in range(30)]
    # 计算涨跌幅
    price_changes = [(price - base_price) / base_price * 100 for price in prices]
    
    return {
        'dates': dates,
        'prices': prices,
        'price_changes': price_changes
    }

@app.route('/api/skins/trend', methods=['GET'])
def get_skin_trend():
    # 这里使用模拟数据，后续可以替换为真实API数据
    data = generate_mock_data()
    return jsonify(data)

@app.route('/api/skins/list', methods=['GET'])
def get_skins_list():
    # 模拟饰品列表数据
    skins = [
        {
            'id': 1,
            'name': 'AK-47 | Asiimov',
            'type': 'rifle',
            'rarity': 'covert',
            'current_price': 150.00,
            'price_change_24h': 5.2
        },
        {
            'id': 2,
            'name': 'M4A4 | Howl',
            'type': 'rifle',
            'rarity': 'contraband',
            'current_price': 1000.00,
            'price_change_24h': -2.1
        },
        {
            'id': 3,
            'name': 'AWP | Dragon Lore',
            'type': 'sniper',
            'rarity': 'covert',
            'current_price': 800.00,
            'price_change_24h': 1.5
        }
    ]
    return jsonify(skins)

if __name__ == '__main__':
    app.run(debug=True) 