# Shop Karo - E-commerce Website

## Overview
Shop Karo is a full-featured e-commerce platform built with React, Redux, and Redux-Saga. It provides a user-friendly shopping experience along with an admin panel for managing categories, brands, testimonials, and products.

## Features
### User Features:
- Home, About, Shop, Features, Testimonials, Contact, and Blogs pages
- Browse and search products
- View product details
- User-friendly navigation bar

### Admin Features:
- Admin dashboard to manage categories, brands, testimonials, and products
- CRUD operations for:
  - Main Categories
  - Subcategories
  - Brands
  - Products
  - Testimonials
- Data displayed in tables using DataTables

## Technologies Used
- **Frontend:** React.js, Redux, Redux-Saga, React Router
- **State Management:** Redux Toolkit
- **Styling:** CSS, Bootstrap
- **Data Handling:** Redux Saga, Axios
- **Admin Panel:** React components for CRUD operations

## Installation
### Prerequisites
Make sure you have Node.js and npm/yarn installed.

### Steps to Install and Run
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/shop-karo.git
   cd shop-karo
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Folder Structure
```
shop-karo/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── Redux/
│   │   ├── Reducers/
│   │   ├── Sagas/
│   │   ├── ActionCreators/
│   │   ├── store.js
│   ├── App.js
│   ├── index.js
├── package.json
└── README.md
```

## API Integration
- The website interacts with a backend server for fetching and managing data related to products, categories, brands, and testimonials.
- API endpoints are configured using environment variables.

## Future Enhancements
- User authentication (Login/Register)
- Shopping cart and checkout functionality
- Payment gateway integration
- User profile management

## Contributing
Feel free to contribute by submitting pull requests. If you encounter any issues, please create a GitHub issue.

## License
This project is licensed under the MIT License.

