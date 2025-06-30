import streamlit as st
from pathlib import Path

def load_html():
    html_path = Path(__file__).parent / "static" / "index.html"
    return html_path.read_text(encoding='utf-8')

st.set_page_config(page_title="Delicious Food", layout="wide")
st.components.v1.html(load_html(), height=1800, scrolling=True)