import fs from 'fs';
// import * as url from 'node_modulesx/url/url';
import * as path from 'path';
const dirPath = path.resolve(`${__dirname}`, '../libs/');
console.log(5555, path, fs)

// const temp: string[] = [];
// function fileDisplay(filePath: string) {
//   console.log(fs.readdir)
//   // 根据文件路径读取文件，返回一个文件列表
//   // fs.readdir(filePath, (err, files) => {
//   //   if (err) {
//   //     console.warn(err);
//   //     return;
//   //   }
//   //   // 遍历读取到的文件列表
//   //   files.forEach(filename => {
//   //     // path.join得到当前文件的绝对路径
//   //     const filepath = path.join(filePath, filename);
//   //     // 根据文件路径获取文件信息
//   //     fs.stat(filepath, (error, stats) => {
//   //       if (error) {
//   //         console.warn('获取文件stats失败');
//   //         return;
//   //       }
//   //       const isFile = stats.isFile(); // 是否为文件
//   //       const isDir = stats.isDirectory(); // 是否为文件夹
//   //       if (isFile) {
//   //         console.log(filepath); //如果是文件，输出它的路径咯～
//   //       }
//   //       if (isDir) {
//   //         fileDisplay(filepath); // 递归，如果是文件夹，就继续遍历该文件夹里面的文件；
//   //       }
//   //     });
//   //   });
//   // });
// }
// fileDisplay(dirPath)

interface MenuType {
  langKey: string,
  code: string,
  path: string,
  icon: string,
  child?: MenuType[]
}

const menus: MenuType[] = [
  {
    langKey: 'home',
    code: 'SECOND_MENU_USER_LIST',
    path: '/home',
    icon: 'icon-tuijian',
  },
  {
    langKey: 'userMgt',
    code: 'SECOND_MENU_USER_LIST',
    path: '/user-mgt',
    icon: 'icon-tuijian',
    child: [
      {
        langKey: 'userListMgt',
        code: 'SECOND_MENU_USER_LIST',
        path: '/user-list-mgt',
        icon: 'icon-tuijian',
        child: [
          {
            langKey: 'userAll',
            code: 'SECOND_MENU_USER_LIST',
            path: '/user-all',
            icon: 'icon-tuijian',
          },
          {
            langKey: 'userVip',
            code: 'SECOND_MENU_USER_LIST',
            path: '/user-vip',
            icon: 'icon-tuijian',
          }
        ]
      },
      {
        langKey: 'userAuth',
        code: 'SECOND_MENU_USER_LIST',
        path: '/user-auth',
        icon: 'icon-tuijian',
      }
    ]
  },
  {
    langKey: 'contMgt',
    code: 'SECOND_MENU_USER_LIST',
    path: '/cont-mgt',
    icon: 'icon-tuijian',
    child: [
      {
        langKey: 'contListMgt',
        code: 'SECOND_MENU_USER_LIST',
        path: '/cont-list-mgt',
        icon: 'icon-tuijian',
        child: [
          {
            langKey: 'contAll',
            code: 'SECOND_MENU_USER_LIST',
            path: '/cont-all',
            icon: 'icon-tuijian',
          }
        ]
      }
    ]
  }
]
export default menus;
