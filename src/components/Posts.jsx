import React, { useState } from "react";
import LargePost from "./LargePost";
import "./Posts.css";
import SmallPost from "./SmallPost";

const Posts = () => {
    const posts = [
        {
            id: 1,
            title: "Object detection using OpenCV",
            author: "BY K Akhilesh Saiju",
            image: "https://techknowhow.club/wp-content/uploads/2024/03/face-detection-e1709486440453.jpg",
            description:
                "In one of my previous articles, I elaborated on using OpenCV with python to switch on a user’s webcam, and to display the live feed.…",
            link: "https://techknowhow.club/index.php/2024/03/03/object-detection-using-opencv/",
        },
        {
            id: 2,
            title: "Communicating via the SerialPort using Electron.js",
            author: "By Aryan",
            image: "https://techknowhow.club/wp-content/uploads/2024/02/featured-1-e1707127610683.jpg",
            description:
                "The serial port is like a digital messenger that electronic devices use to share information. If you have ever workeded with an Arduino or Raspberry…",
            link: "https://techknowhow.club/index.php/2024/02/05/communicating-via-the-serialport/",
        },
        {
            id: 3,
            title: "Git and GitHub – How to Setup and Get Started",
            author: "By Vaidehi",
            image: "https://techknowhow.club/wp-content/uploads/2024/01/b00068535cb6-e1705661153313-1200x675.jpeg",
            description:
                "Topics discussed What is Git? Git terminology Git Installation and setup What is GitHub? Basic functionalities of GitHub using Git What is Git? Git…",
            link: "https://techknowhow.club/index.php/2024/01/19/git-and-github-how-to-setup-and-get-started/",
        },
        {
            id: 4,
            title: "Server-Side scripting with XAMPP",
            author: "By K Akhilesh Saiju",
            image: "https://techknowhow.club/wp-content/uploads/2024/01/final-logos-e1705396163244-300x198.png",
            description:
                "XAMPP is an open-source web server distribution which has become...",
            link: "https://techknowhow.club/index.php/2024/01/16/server-side-scripting-with-xampp/",
        },
        {
            id: 5,
            title: "Creating a REST API using Node.js & Express.js",
            author: "By Aryan",
            image: "https://techknowhow.club/wp-content/uploads/2024/01/Untitled-e1705084718693-300x300.jpg",
            description:
                "Following up on the previous article where we discussed what...",
            link: "https://techknowhow.club/index.php/2024/01/13/creating-a-rest-api-using-node-js-express-js/",
        },
        {
            id: 6,
            title: "A Hands-on Approach to Docker",
            author: "By Devansh Agarwal",
            image: "https://techknowhow.club/wp-content/uploads/2024/01/01-primary-blue-docker-logo-1-e1705143705192-300x208.png",
            description:
                "Table of Contents What is Docker? Installation and Setup Docker...",
            link: "https://techknowhow.club/index.php/2024/01/13/a-hands-on-approach-to-docker/",
        },
        {
            id: 7,
            title: "Kubernetes: The only Intro you will need",
            author: "By Devansh Agarwal",
            image: "https://techknowhow.club/wp-content/uploads/2024/02/kubernetes-removebg-preview-e1707480933666.png",
            description:
                "What is Kubernetes? Kubernetes  also abbreviated as k8s is an orchestration tool allowing you to run and manage your container-based workloads. If you do not…",
            link: "https://techknowhow.club/index.php/2024/02/09/kubernetes-the-only-intro-you-will-need/",
        },
        // Add more posts here
    ];

    const [selectedPost, setSelectedPost] = useState(null);

    const handlePostClick = (postId) => {
        setSelectedPost(postId);
    };

    const latestThreePosts = posts.slice(0, 3);

    // Get the remaining posts as small posts
    const remainingPosts = posts.slice(3);
    // Calculate the midpoint to divide the remaining posts into left and right
    const midpoint = Math.ceil(remainingPosts.length / 2);
    const leftPosts = remainingPosts.slice(0, midpoint);
    const rightPosts = remainingPosts.slice(midpoint);

    // State for feedback form
    const [feedback, setFeedback] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        rating: "",
        likedArticles: [],
    });

    // State for newsletter subscription form
    const [newsletterEmail, setNewsletterEmail] = useState("");

    // Event handler for feedback form submission
    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        console.log("Feedback submitted:", feedback);
        // Reset form fields
        setFeedback({
            name: "",
            email: "",
            phone: "",
            message: "",
            rating: "",
            likedArticles: [],
        });
    };

    // Event handler for newsletter subscription form submission
    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        console.log("Subscribed to newsletter:", newsletterEmail);
        // Reset form field
        setNewsletterEmail("");
    };

    // Phone number validation
    const validatePhoneNumber = (phone) => {
        return /^[0-9]{10}$/.test(phone);
    };

    return (
        <div className="all">
            <div className="left-posts">
                {leftPosts.map((post) => (
                    <a
                        key={post.id}
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SmallPost
                            title={post.title}
                            author={post.author}
                            image={post.image}
                            description={post.description}
                            onClick={() => handlePostClick(post.id)}
                        />
                    </a>
                ))}
            </div>

            <div className="main-posts">
                {/* Main posts */}
                {selectedPost ? (
                    <LargePost
                        title={posts[selectedPost - 1].title}
                        author={posts[selectedPost - 1].author}
                        image={posts[selectedPost - 1].image}
                        description={posts[selectedPost - 1].description}
                    />
                ) : (
                    latestThreePosts.map((post) => (
                        <a
                            key={post.id}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LargePost
                                title={post.title}
                                author={post.author}
                                image={post.image}
                                description={post.description}
                                onClick={() => handlePostClick(post.id)}
                            />
                        </a>
                    ))
                )}

                {/* Feedback form */}
                <div className="form-container">
                    <h2>Feedback Form</h2>
                    <form onSubmit={handleFeedbackSubmit}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={feedback.name}
                            onChange={(e) =>
                                setFeedback({
                                    ...feedback,
                                    name: e.target.value,
                                })
                            }
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={feedback.email}
                            onChange={(e) =>
                                setFeedback({
                                    ...feedback,
                                    email: e.target.value,
                                })
                            }
                        />
                        <input
                            type="tel"
                            placeholder="Your Phone Number"
                            value={feedback.phone}
                            onChange={(e) =>
                                setFeedback({
                                    ...feedback,
                                    phone: e.target.value,
                                })
                            }
                        />
                        <textarea
                            placeholder="Your Message"
                            value={feedback.message}
                            onChange={(e) =>
                                setFeedback({
                                    ...feedback,
                                    message: e.target.value,
                                })
                            }
                        ></textarea>
                        <div>
                            <label
                                style={{ display: "flex", marginRight: "10px" }}
                            >
                                <input
                                    type="checkbox"
                                    value={posts[0].title}
                                    checked={feedback.likedArticles.includes(
                                        posts[0].title
                                    )}
                                    onChange={(e) => {
                                        const likedArticles = [
                                            ...feedback.likedArticles,
                                        ];
                                        if (e.target.checked) {
                                            likedArticles.push(e.target.value);
                                        } else {
                                            const index = likedArticles.indexOf(
                                                e.target.value
                                            );
                                            if (index !== -1) {
                                                likedArticles.splice(index, 1);
                                            }
                                        }
                                        setFeedback({
                                            ...feedback,
                                            likedArticles,
                                        });
                                    }}
                                    style={{ width: "15px", height: "15px" }} // Adjust the size here
                                />
                                {posts[0].title}
                            </label>

                            <label
                                style={{ display: "flex", marginRight: "10px" }}
                            >
                                <input
                                    type="checkbox"
                                    value={posts[1].title}
                                    checked={feedback.likedArticles.includes(
                                        posts[1].title
                                    )}
                                    onChange={(e) => {
                                        const likedArticles = [
                                            ...feedback.likedArticles,
                                        ];
                                        if (e.target.checked) {
                                            likedArticles.push(e.target.value);
                                        } else {
                                            const index = likedArticles.indexOf(
                                                e.target.value
                                            );
                                            if (index !== -1) {
                                                likedArticles.splice(index, 1);
                                            }
                                        }
                                        setFeedback({
                                            ...feedback,
                                            likedArticles,
                                        });
                                    }}
                                    style={{ width: "15px", height: "15px" }} // Adjust the size here
                                />
                                {posts[1].title}
                            </label>

                            <label
                                style={{ display: "flex", marginRight: "10px" }}
                            >
                                <input
                                    type="checkbox"
                                    value={posts[2].title}
                                    checked={feedback.likedArticles.includes(
                                        posts[2].title
                                    )}
                                    onChange={(e) => {
                                        const likedArticles = [
                                            ...feedback.likedArticles,
                                        ];
                                        if (e.target.checked) {
                                            likedArticles.push(e.target.value);
                                        } else {
                                            const index = likedArticles.indexOf(
                                                e.target.value
                                            );
                                            if (index !== -1) {
                                                likedArticles.splice(index, 1);
                                            }
                                        }
                                        setFeedback({
                                            ...feedback,
                                            likedArticles,
                                        });
                                    }}
                                    style={{ width: "15px", height: "15px" }} // Adjust the size here
                                />
                                {posts[2].title}
                            </label>

                            {/* Repeat this structure for each post */}
                        </div>

                        <div style={{ display: "flex", marginLeft: "150px" }}>
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <label
                                    key={rating}
                                    style={{
                                        marginRight: "10px",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <input
                                        type="radio"
                                        value={String(rating)}
                                        checked={
                                            feedback.rating === String(rating)
                                        }
                                        onChange={(e) =>
                                            setFeedback({
                                                ...feedback,
                                                rating: e.target.value,
                                            })
                                        }
                                        style={{ marginRight: "5px" }}
                                    />
                                    {rating}
                                </label>
                            ))}
                        </div>

                        <button type="submit">Submit Feedback</button>
                        <button
                            type="reset"
                            onClick={() =>
                                setFeedback({
                                    name: "",
                                    email: "",
                                    phone: "",
                                    message: "",
                                    rating: "",
                                    likedArticles: [],
                                })
                            }
                        >
                            Reset
                        </button>
                    </form>
                </div>

                {/* Newsletter subscription form */}
                <div className="form-container">
                    <h2>Subscribe to Newsletter</h2>
                    <form onSubmit={handleNewsletterSubmit}>
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={newsletterEmail}
                            onChange={(e) => setNewsletterEmail(e.target.value)}
                        />
                        <button type="submit">Subscribe</button>
                        <button
                            type="reset"
                            onClick={() => setNewsletterEmail("")}
                        >
                            Reset
                        </button>
                    </form>
                </div>

                {/* Editor Roles and Article Count Table */}
                <div className="editor-table">
                    <h2>Editor Roles and Article Counts</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Editor</th>
                                <th>Role</th>
                                <th>Duration</th>
                                <th>Article Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Aryan Bhirud</td>
                                <td>Editor-in-Chief</td>
                                <td>Since Jan 2023</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>K Akhilesh Saiju</td>
                                <td>Senior Editor</td>
                                <td>Since Jan 2024</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Vaidehi</td>
                                <td>Editor</td>
                                <td>Since Jan 2024</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Devansh Agarwal</td>
                                <td>Editor</td>
                                <td>Since Jan 2024</td>
                                <td>2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="right-posts">
                {rightPosts.map((post) => (
                    <a
                        key={post.id}
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SmallPost
                            title={post.title}
                            author={post.author}
                            image={post.image}
                            description={post.description}
                            onClick={() => handlePostClick(post.id)}
                        />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Posts;
