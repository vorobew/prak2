import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Modal, Portal, Provider } from 'react-native-paper';

const frameGalery = [
  { title: 'Великая французская революция', place: 'Франция', year: 1789, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAS5MlsgP2PosaFElRCNe4jUDlgfKBZYv-ng&s', info: 'Начало борьбы за свободу и равенство' },
  { title: 'Первый полет человека в космос', place: 'СССР', year: 1961, imageUrl: 'https://illustrators.ru/uploads/illustration/image/1600043/%D0%93%D0%B0%D0%B3%D0%B0%D1%80%D0%B8%D0%BD2021-0.jpg', info: 'Юрий Гагарин облетел Землю' },
  { title: 'Открытие Америки', place: 'Америка', year: 1492, imageUrl: 'https://pgbooks.ru/upload/blog/c2c/c2c82941d37e52da714b3c51e0a3fa07.jpg', info: 'Христофор Колумб достиг Нового Света' },
  { title: 'Падение Западной Римской империи', place: 'Римская империя', year: 476, imageUrl: 'https://x-legio.com/photo/3253/3.jpg', info: 'Конец античности и начало Средневековья' },
  { title: 'Принятие христианства на Руси', place: 'Киевская Русь', year: 988, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/75/%D0%9A%D1%80%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D0%B5_%D0%A0%D1%83%D1%81%D0%B8.jpg', info: 'Крещение князя Владимира и народа' },
  { title: 'Великая Отечественная война', place: 'СССР', year: 1941, imageUrl: 'https://www.sechenov.ru/upload/medialibrary/66b/KHroniki-velikikh-strazheniy.jpeg', info: 'Начало войны с нацистской Германией' },
  { title: 'Падение Берлинской стены', place: 'Германия', year: 1989, imageUrl: 'https://gdb.voanews.com/df0f1907-b5e0-4c53-a804-88327aa6737e_cx0_cy11_cw0_w1080_h608_s.jpg', info: 'Объединение Германии' },
  { title: 'Октябрьская революция', place: 'Россия', year: 1917, imageUrl: 'https://s0.rbk.ru/v6_top_pics/media/img/7/76/754598845555767.jpeg', info: 'Свержение Временного правительства в России' },
  { title: 'Основание Рима', place: 'Италия', year: -753, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXt3CXSN6HMlVijQhIEGgK1Jr3fvgV3SG-Pg&s', info: 'Легенда о Ромуле и Реме' },
  { title: 'Начало промышленной революции', place: 'Великобритания', year: 1760, imageUrl: 'https://humanities.by/wp-content/uploads/2020/08/promyshlennaya-revolyucziya-v-anglii.jpg', info: 'Переход к фабричному производству' }
];


const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  const nextItem = () => {
    if (currentIndex < frameGalery.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevItem = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <Provider>
      <View style={styles.container}>
        <Image source={{ uri: frameGalery[currentIndex].imageUrl }} style={styles.image} />
        <TouchableOpacity onLongPress={() => setVisible(true)}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{frameGalery[currentIndex].title}</Text>
            <Text style={styles.place}>место: {frameGalery[currentIndex].place} ({frameGalery[currentIndex].year})</Text>
          </View>
        </TouchableOpacity>

        {/* Модальное окно */}
        <Portal>
          <Modal visible={visible} onDismiss={() => setVisible(false)} contentContainerStyle={styles.modalContainer}>
            <Text style={styles.modalText}>{frameGalery[currentIndex].info}</Text>
          </Modal>
        </Portal>

        <View style={styles.buttonContainer}>
          <Button title="Previous" onPress={prevItem} disabled={currentIndex === 0} />
          <Button title="Next" onPress={nextItem} disabled={currentIndex === frameGalery.length - 1} />
        </View>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  place: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;
