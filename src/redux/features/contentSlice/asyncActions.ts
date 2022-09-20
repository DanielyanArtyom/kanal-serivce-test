import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  IContentUser,
  IPhoto,
  IPost,
  IPostsToShow,
} from "../../../common/interfaces/ContentInterface";
import { IUser } from "../../../common/interfaces/UserInterfaces";
import { mainApi } from "../../../constants/enviroment";

const getPostsAndPhotos = async (user: IUser): Promise<IPostsToShow[]> => {
  const _photos = await axios.get<IPhoto[]>(
    `${mainApi}/photos?albumId=${user.id}&_page=0&_limit=1`
  );
  const _posts = await axios.get<IPost[]>(
    `${mainApi}/posts?userId=${user.id}&_page=1&_limit=2`
  );
  return _posts.data.map((post) => ({
    name: user.name,
    company: user.company,
    photoUrl: _photos.data[0].url,
    ...post,
  }));
};

export const fetchContent = createAsyncThunk<any>(
  "content/fetchContent",
  async () => {
    try {
      const users = await axios.get<IContentUser[]>(`${mainApi}/users`);
      const _posts = await Promise.all(
        users.data.map((user) => {
          const _user = {
            id: user.id,
            name: user.name,
            company: user.company.name,
          };
          return getPostsAndPhotos(_user);
        })
      );
      return _posts.flat();
    } catch (e) {}
  }
);
