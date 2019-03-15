Winterfell app from scratch

1. Make a new starter app with create-react-app

2. Render all the characters for house stark in a sidebar using this api https://anapioficeandfire.com/api/houses/362 you can find the list of character urls under swornMembers key (need to make another request to get the data for each character).

3. When a character is clicked render character details. Details view should take up the rest of the view and render name, title, aliases and if dead or not and a like button.

4. If a character has aliases, the user be able to pick an alias as new default name for that character and the previous name should be rendered in the list of aliases

5. When a user likes the character, the character should appear in liked character list.

6. User should be able to click a button which toggles between showing all the characters and liked characters.

7. If the character has been liked, the details view should instead show an unlike button which would remove the character from liked list.

8. Reuse at least 1 component