from flask import Blueprint, render_template, request, flash, redirect, url_for
from flask_login import current_user, login_required
from . import db
from .models import Note
views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template('home.html', user = current_user)

@views.route('/notes', methods=['GET', 'POST'])
@login_required
def notes():
    # Fetch user notes
    user_notes = Note.query.filter_by(user_id = current_user.id)

    if request.method == 'POST':
        noteTitle = request.form.get('noteTitle')
        noteContent = request.form.get('noteContent')
        print('Note title = ', noteTitle)
        print('Note content = ', noteContent)

        new_note = Note(title=noteTitle, content=noteContent, user_id=current_user.id)
        db.session.add(new_note)
        db.session.commit()
    return render_template('notes.html',user=current_user, user_notes = user_notes)

@views.route('/deleteNote', methods=['POST'])
def deleteNote():
    note_id = request.form.get('deleteButton')
    print(note_id)
    note_to_delete = Note.query.filter_by(id = note_id).first()
    db.session.delete(note_to_delete)
    db.session.commit()
    flash('Note deleted', category='success')
    return redirect(url_for('views.notes'))