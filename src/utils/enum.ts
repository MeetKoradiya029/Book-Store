export enum RoutePaths {
  Login = "/login",
  Register = "/register",
  User = "/user",
  EditUser = "/edit-user/:id",
  Category = "/category",
  EditCategory = "/edit-category/:id",
  AddCategory = "/add-category",
  Book = "/book",
  EditBook = "/edit-book/:id",
  AddBook = "/add-book",
  BookListing = "/",
  Cart = "/Cart",
  UpdateProfile = "/update-profile",
}

export enum Role {
    Admin = 1,
    Seller = 2,
    Buyer = 3
 }