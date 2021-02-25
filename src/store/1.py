import os

def clear_catalog(src, checker):
    file_list = os.listdir(src)
    strings = ["import state from \"./state\"; ",
                   "import mutations from \"../../mutations\";",
                   "import getters from \"../../getters\";",
                   "export default {",
                     "  namespaced:true,",
                     "  state,",
                     "  mutations,",
                     "  getters,",
                   "}",
                   ]
    for item in file_list:
        s = os.path.join(src, item)
        if os.path.isdir(s):
            clear_catalog(s,checker)
        else:
            if checker(str(os.path.basename(s))):
                fwrite(s,strings)



def fwrite(name,strings):
    print(name)
    f = open(name, 'w') #Запись в файл
    for s in strings:
      f.write(s+'\n')
    f.close()


clear_catalog('F:\\documents\\projects\\java\\DiplomProject\\FrontEnd\\src\\store\\report_tables',lambda s: s.endswith('index.js'))
