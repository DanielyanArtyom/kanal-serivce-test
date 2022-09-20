import { View, Text, FlatList } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import RenderContent from "../../components/RenderContent";
import { styles } from "./styles";
import { useAppDispatch } from "../../hooks/useAppDistach";
import { fetchContent } from "../../redux/features/contentSlice/asyncActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getContent, isFetching } from "../../redux/features/contentSlice/contentSlice";
import Loader from "../../components/Loader";

const Home = () => {
  const dispatch = useAppDispatch();
  const _content = useAppSelector(getContent);
  const _isFetching = useAppSelector(isFetching)
  const fetchContents = useCallback(() => {
    dispatch(fetchContent());
  }, []);

  useEffect(() => {
    fetchContents();
  }, []);
  
  if(_isFetching) {
    return <Loader />
  }

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        {_content.length ? (
          <FlatList
            contentContainerStyle={styles.flatList}
            data={_content}
            renderItem={({ item }) => <RenderContent {...item} />}
            keyExtractor={(item) => `${item.id}`}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Home;
