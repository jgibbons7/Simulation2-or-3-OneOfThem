SELECT u.username, p.title, p.img, p.content
FROM users u
JOIN posts p ON u.id = p.author_id