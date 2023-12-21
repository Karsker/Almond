from . import db
from flask import Blueprint, render_template, request, flash
from .models import User
from werkzeug.security import generate_password_hash

auth = Blueprint('auth', __name__)

@auth.route('sign-up', methods = ["POST", "GET"])
def signup():
    if request.method == 'POST':
        username = request.form.get('userName')
        email = request.form.get('userEmail')
        password1 = request.form.get('userPassword')
        password2 = request.form.get('userPasswordConfirm')


        # Checks for empty fields
        username_not_filled = username == None or username == ''
        email_not_filled = email == None or email == ''
        password1_not_filled = password1 == None or password1 == ''
        password2_not_filled = password2 == None or password2 == ''

        if username_not_filled or email_not_filled or password2_not_filled or password1_not_filled:
            flash('Please fill all the fields', category='error')
        elif len(password1) < 8:
            flash('Password should be atleast 8 characters long', category='error')
        elif password1 != password2:
            flash('Passwords do not match', category='error')
        else:
            # All the entries are valid
            # Add the user to the database

            # Check if the user already exists
            queried_user = User.query.filter_by(email = email).first()
            
            if queried_user:
                flash('A user with that email already exists', category='error')
            else:
                new_user = User (
                    username = username,
                    email = email,
                    password = generate_password_hash(password1, method='pbkdf2:sha256')
                )
                db.session.add(new_user)
                db.session.commit()
                print('New user added to datatbase: ', username)
                flash('Registered successfully', category='success')

    return render_template('signup.html')