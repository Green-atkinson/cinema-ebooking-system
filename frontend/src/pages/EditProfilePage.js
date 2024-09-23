import React from 'react';

const EditProfilePage = () => {
  return (
    <div>
      <h2>Edit Profile</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" required />
        <br />
        <label>Email:</label>
        <input type="email" name="email" required />
        <br />
        <label>Password:</label>
        <input type="password" name="password" />
        <br />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfilePage;
