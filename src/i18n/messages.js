export default {
    pt: {
        actions: {
            add: 'Adicionar novo(a) {type}',
            addItem: 'Adicionar',
            addGroup: 'Adicionar um novo grupo',
            alignLeft: 'Alinhar à esquerda',
            alignRight: 'Alinhar à direira',
            alignTop: 'Alinhar com o topo',
            alignBottom: 'Alinhar com parte inferior',
            back: 'Voltar',
            cancel: 'Cancelar',
            changeOption: 'Alterar opção...',
            choose: 'Escolha',
            chooseOption: 'Escolha uma opção ...',
            clearFilters: 'Limpar filtros',
            create: 'Criar um novo {type}',
            delete: 'Excluir',
            distributeHorizontally: 'Distribuir horizontalmente',
            distributeVertically: 'Distribuir verticalmente',
            download: 'Baixar',
            edit: 'Editar',
            editValue: 'Editar valor...',
            execute: 'Executar ...',
            restore: 'Restaurar',
            save: 'Salvar',
            saveAs: 'Salvar como',
            saveAsImage: 'Salvar como imagem',
            search: 'Pesquisar',
            showHistory: 'Exibir histórico',
            showResults: 'Exibir resultados',
            show: 'Exibir',
            test: 'Testar',
            toggleTasks: 'Habilitar/desabilitar tarefas'
        },
        common: {
            action: 'Ação | Ações',
            author: 'Autor',
            attention: 'Atenção',
            alreadyHaveAccount: 'Já possui uma conta?',
            attribute: 'Atributo | Atributos',
            command: 'Comando SQL',
            confirmPassword: 'Confirmar senha',
            created: 'Criado',
            createAccount: 'Criar conta',
            date: 'Data',
            description: 'Descrição',
            dontHaveAccount: 'Não possui uma conta?',
            email: 'E-mail',
            enabled: 'Habilitado',
            filter: 'Filtro:',
            filterPlaceholder: 'Busca',
            firstName: 'Primeiro nome',
            forgotPassword: 'Esqueceu a senha?',
            format: 'Formato',
            hide: 'Ocultar',
            history: 'Histórico',
            id: 'Id',
            language: 'Idioma',
            lastName: 'Último nome',
            limit: 'Limite:',
            login: 'Entrar',
            logout: 'Sair',
            no: 'Não',
            noData: 'Nenhum registro encontrado.',
            name: 'Nome | Nomes',
            nullable: 'Aceita nulos',
            ok: 'OK',
            operation: 'Operação | Operações',
            optional: 'Opcional',
            owner: 'Proprietário',
            pagerShowing: 'Exibindo registros de {from} até {to}, para um total de {count} records|{count} registros|Um registro',
            password: 'Senha',
            permission: 'Permissão | Permissões',
            platform: 'Platforma',
            precision: 'Precisão',
            preview: 'Previsão',
            rememberMe: 'Lembrar minha senha',
            saveBeforeToEnableThis: 'Salve os dados para habilitar a ação {what}',
            scale: 'Escala',
            show: 'Exibir',
            size: 'Tamanho',
            tag: 'Tag | Tags',
            tags: 'Tags',
            title: 'Título',
            type: 'Tipo | Tipos',
            updated: 'Atualizado',
            userId: 'Id de usuário',
            userLogin: 'Login do usuário',
            userName: 'Nome do usuário',
            user: {
                name: 'Nome do usuário',
                login: 'Login do usuário'
            },
            version: 'Versão',
            yes: 'Sim',
        },
        dataSource: {
            alternativeUseDatabase: 'Recomenda-se esta opção apenas se você está seguro que a conexão ao servidor de banco de dados está corretamente configurada.',
            attribute: 'Atributo | Atributos',
            attributeDelimiter: 'Delimitador de atributos (apenas CSV)',
            basicInformation: 'Informação básica',
            databaseConnectionPreviouslyConfigured: 'A conexão ao servidor de banco de dados deve ter sido configurada anteriormente por um administrador',
            databaseStorage: 'Armazenamento para a base de dados',
            differentFormatsSupported: 'Diferentes formatos são suportados (CSV, JSON, XML, TXT)',
            distributedFileSystem: 'Sistema de arquivos distribuído (HDFS)',
            dropFilesHere: 'Arraste e solte arquivos aqui para carregá-los ou',
            encoding: 'Codificação (opcional)',
            features: 'Atributos',
            format: 'Formato',
            inconsistentFormat: 'O formato escolhido é incompatível com o armazenamento escolhido.',
            inferSchema: 'Inferir o esquema',
            inferSuccess: 'Atributos inferidos com sucesso.',
            inferSupported: 'Lemonade suporta inferir atributos para o formato {what}.',
            isFirstLineHeader: 'Usar a primeira linha como cabeçalho',
            isMultiline: 'Multilinas (atributo com quebra de linha)',
            missingRepresentation: 'Representação para dados ausentes',
            noPermissions: 'Nenhuma permissão definida',
            noAttributes: 'Nenhum atributo definido.',
            permission: 'Permissão | Permissões',
            previewExplanation: 'Esta é uma amostra com {amount} registros (max).',
            privacy: 'Privacidade',
            privacyAware: 'Suporta privacidade dos dados',
            public: 'Pública',
            recordDelimiter: 'Delimitador de registro (apenas CSV)',
            scalability: 'Escalabilidade',
            selectCommand: 'Comando SQL SELECT',
            selectFromComputer: 'selecionar arquivos em seu computador',
            storage: 'Armazenamento',
            suggestedOption: 'Se você não sabe qual opção escolher, esta é a opção recomendada.',
            textDelimiter: 'Delimitador de texto (apenas CSV)',
            treatAsNull: 'Tratar estes valores como valores nulos (opcional)',
            uploadExplanation: 'Cada arquivo criará uma nova base de dados com nome igual ao nome do arquivo e demais parâmertos com os valores padrão (você poderá alterá-los posteriormente).',
            whatTypeOfDataSourceToAdd: 'Que tipo de base de dados você quer adicionar?',
            youCanUploadYourFiles: 'Você pdoe carregar seus próprios arquivos para o servidor',
            youCanUseSQL: 'Você pode usar comandos SELECT SQL para recuperar os dados',
        },
        errors: {
            disconnected: 'You are disconnected. Please check if you have access to the Internet.',
            invalidLoginOrPassword: 'Invalid login or password',
            invalidOperation: 'Invalid operation',
            passwordDontMatch: 'Passwords do not match',
            loginInUse: 'Login/email is in use. Try another one.',
            receivingData: 'Error receiving data from the server',
            sendingData: 'Error sending data to the server.'
        },
        job: {
            error: 'Erro durante a execução. Veja mais detalhes na janela de log acima.',
            logs: 'Log de execução | Logs de execução',
            results: 'Resultado | Resultados',
            sourceCode: 'Código-fonte',
            visualizations: 'Visualização | Visualizações',
        },
        messages: {
            acceptTerms: 'I agree with the policy terms <a href="{link}">Policy</a>',
            doYouWantToDelete: 'Do you want to delete this record?',
            confirmRemove: 'Are you sure you want to remove this record?',
            successDeletion: '{what} was successfuly removed',
            registeredWithSuccess: 'You were registered with success. Please, sign in again.',
            savedWithSuccess: '{what} saved with success.',
            noMatching: 'Sorry, no matching options'
        },
        privacy: {
            anonymizationTechnique: 'Anonymization technique',
            privacyType: 'Privacy type',
            hierarchy: 'Hierarchy',
            attributePrivacyGroup: 'Attribute privacy group',
        },
        profile: {
            alsoChangePassword: 'Also change my password',
            updated: 'Profile updated'
        },
        property: {
            alias: 'Nome novo',
            attribute: 'Atributo',
            editValue: 'Editar valor ...',
            function: 'Função',
            help: 'Ajuda',
            taskName: 'Nome da tarefa (opcional)',
            expression: {
                alias: 'New attribute name (alias)',
                explanation: 'Add one or more expresssions. New attributes will be created from the expressions informed here and you need to inform a name (alias) for them.',
                tip: `To use an attribute, just inform its name. For string constants, delimit them with quotes (single or double). 
                Examples: <code>substring(name, instr(name, " "))</code>.`,
                title: 'Expression',
                validExpressions: `Valid expressions include math expressions 
                (e.g. <strong><code>attr * 10 - 4 </code></strong>) and function calls 
                (e.g. <strong><code>split(attr, ' ') </code></strong>). For more informations, 
                see Lemonade Reference Guide or Apache Spark SQL functions. `,
            },
            queryBuilder: {
                explanation: 'Write a SQL compatible Query. The supported syntax depend on the choosen platform, but in simple queries work in all cases. See documentation for more information.',
                title: 'SQL query command',
            },
        },
        titles: {
            action: 'Ação | Ações',
            administration: 'Administração',
            cluster: 'Cluster | Clusters',
            dataSource: 'Base de dados | Bases de dados',
            dashboard: 'Dashboard | Dashboards',
            error: 'Erro',
            errorDetail: 'Detalhe do erro (avançado)',
            globalPrivacyPolicy: 'Política global de privacidade|Políticas globais de privacidade',
            job: 'Execução | Execuções',
            jobs: 'Execuções',
            lemonade: 'Lemonade',
            lemonadePlatform: 'Plataforma Lemonade',
            login: 'Entrar',
            platform: 'Platforma | Platformas',
            profile: 'Perfil',
            property: 'Propriedade | Propriedades',
            register: 'Registrar',
            storage: 'Armazenamento | Armazenamentos',
            success: 'Successo',
            template: 'Modelo | Modelos',
            toolboxCategory: 'Organização das operações',
            user: 'Usuário | Usuários',
            warning: 'Aviso',
            whatIfModel: 'What if model?',
            workflow: 'Fluxo de trabalho | Fluxos de trabalho',
        },
        
        home: {
            aPlatformForDataScience: 'Uma plataforma para ciência dos dados',
            learnMore: 'Aprenda mais',
            recentlyUpdated: '{what} recentemente atualizados(as)',
            welcome: `Bem-vindo ao Lemonade. 
            Lemonade (Live Exploration and Mining Of Non-trivial Amount of Data from Everywhere) é uma platforma visual para computação distribuída 
            que permite a implementação, experimentação, teste and implantação de aplicações de processamento de dados aprendizado de máquina. 
            Ele provê um nível mais alto de abstração (fluxo de trabalho e operations) para que os usuários construam aplicações em uma interface gráfica web. 
            Por usar tecnologias escaláveis e de alto desempenho, tais como COMPSs, Keras+Tensorflow e Spark, 
            Lemonade pode processar grandes volumes de dados, ocultado toda a complexidade de infraestrutura dos usuários, permitindo-os focar
            principalmente na construção da solução.
            Lemonade é implementado como uma ferramenta de código aberto e está em desenvolvimento 
            como produto dos projetos EUBra-BIGSEA e Atmosphere.`
        },
        workflow: {
            asImage: 'Como uma imagem (uma janela para baixar a imagem aparecerá)',
            asTemplate: 'Como um modelo de fluxo de trabalho (poderá ser reusado posteriormente)',
            copyOf: 'Cópia de',
            execute: 'Executar fluxo de trabalho',
            imageGeneratedAt: 'Imagem gerada em',
            jobName: 'Nome para a execução',
            newName: 'Novo nome (uma cópia do fluxo de trabalho será criado, mas não será carregado)',
            required: 'Por favor, complete as informações necessárias para a execução do fluxo de trabalho',
            restoreHistory: 'Você quer realmente restaurar o fluxo de trabalho para uma versão antiga?',
            versionRestored: 'Versão {version} restaurada com sucesso e agora é a versão {version2}. Mas ELE NÃO FOI SALVO, você precisa explicitamente salvá-lo.',
        }
    },

    en: {
        actions: {
            add: 'Add new {type}',
            addItem: 'Add',
            addGroup: 'Add a new group',
            alignLeft: 'Align left',
            alignRight: 'Align right',
            alignTop: 'Align top',
            alignBottom: 'Align bottom',
            back: 'Back',
            cancel: 'Cancel',
            changeOption: 'Change option...',
            choose: 'Choose',
            chooseOption: 'Choose option...',
            clearFilters: 'Clear filters',
            create: 'Create new {type}',
            delete: 'Delete',
            distributeHorizontally: 'Distribute horizontally',
            distributeVertically: 'Distribute vertically',
            download: 'Download',
            edit: 'Edit',
            editValue: 'Edit value...',
            execute: 'Execute...',
            restore: 'Restore',
            save: 'Save',
            saveAs: 'Save as',
            saveAsImage: 'Save as image',
            search: 'Search',
            showHistory: 'Show history',
            showResults: 'Show results',
            show: 'Show',
            test: 'Test',
            toggleTasks: 'Enable/disable tasks'
        },
        common: {
            action: 'Action | Actions',
            author: 'Author',
            attention: 'Attention',
            alreadyHaveAccount: 'Already have an account?',
            attribute: 'Attribute | Attributes',
            command: 'SQL Command',
            confirmPassword: 'Confirm password',
            created: 'Created',
            createAccount: 'Sign up',
            date: 'Date',
            description: 'Description',
            dontHaveAccount: 'Don\'t have an account?',
            email: 'E-mail',
            enabled: 'Enabled',
            filter: 'Filter:',
            firstName: 'First name',
            forgotPassword: 'Forgot password?',
            format: 'Format',
            hide: 'Hide',
            history: 'History',
            id: 'Id',
            language: 'Language',
            lastName: 'Last name',
            limit: 'Limit:',
            login: 'Sign in',
            logout: 'Sign off',
            no: 'No',
            noData: 'No results found.',
            name: 'Name | Names',
            nullable: 'Nullable',
            ok: 'OK',
            operation: 'Operation | Operations',
            optional: 'Optional',
            owner: 'Owner',
            pagerShowing: 'Showing {from} to {to} of {count} records|{count} records|One record',
            password: 'Password',
            permission: 'Permission | Permissions',
            platform: 'Platform',
            precision: 'Precision',
            preview: 'Preview',
            rememberMe: 'Remember me',
            saveBeforeToEnableThis: 'Save data to enabled the {what} action',
            scale: 'Scale',
            show: 'Show',
            size: 'Size',
            tag: 'Tag | Tags',
            tags: 'Tags',
            title: 'Title',
            type: 'Type | Types',
            updated: 'Updated',
            userId: 'User id',
            userLogin: 'User login',
            userName: 'User name',
            user: {
                name: 'User name',
                login: 'User login'
            },
            version: 'Version',
            yes: 'Yes',
        },
        dataSource: {
            alternativeUseDatabase: 'We recommend this option only if you are sure the database connection is correctly configured.',
            attribute: 'Attribute | Attributes',
            attributeDelimiter: 'Attribute delimiter (CSV only)',
            basicInformation: 'Basic information',
            databaseConnectionPreviouslyConfigured: 'The database connection must be previously configured by an administrator',
            databaseStorage: 'Database storage',
            differentFormatsSupported: 'Different formats are supported (CSV, JSON, XML, TXT)',
            distributedFileSystem: 'Distributed file system (HDFS)',
            dropFilesHere: 'Drop files here to upload or',
            encoding: 'Encoding (optional)',
            features: 'Features',
            format: 'Format',
            inconsistentFormat: 'The chosen format is incompatible with the chosen storage.',
            inferSchema: 'Infer schema',
            inferSuccess: 'Attributes infered with success.',
            inferSupported: 'Lemonade supports infering attributes for the format {what}.',
            isFirstLineHeader: 'Use first line as header',
            isMultiline: 'Is multiline',
            missingRepresentation: 'Missing representation',
            noPermissions: 'No permissions defined',
            noAttributes: 'No attributes defined.',
            permission: 'Permission | Permissions',
            previewExplanation: 'This is a sample of {amount} rows (max).',
            privacy: 'Privacy',
            privacyAware: 'Privacy aware',
            public: 'Public',
            recordDelimiter: 'Record delimiter (CSV only)',
            scalability: 'Scalability',
            selectCommand: 'SQL SELECT command',
            selectFromComputer: 'select them from your computer',
            storage: 'Storage',
            suggestedOption: 'If you do not know what to choose, this is the suggested option.',
            textDelimiter: 'Text delimiter (CSV only)',
            treatAsNull: 'Treat these values as null (optional)',
            uploadExplanation: 'Each file will create a new data source with name equals to the file and other parameters with default values (you will be able to change them later).',
            whatTypeOfDataSourceToAdd: 'What type of data source do you want to add?',
            youCanUploadYourFiles: 'You can upload your own files',
            youCanUseSQL: 'You can use SQL to query data',
        },
        errors: {
            disconnected: 'You are disconnected. Please check if you have access to the Internet.',
            invalidLoginOrPassword: 'Invalid login or password',
            invalidOperation: 'Invalid operation',
            passwordDontMatch: 'Passwords do not match',
            loginInUse: 'Login/email is in use. Try another one.',
            receivingData: 'Error receiving data from the server',
            sendingData: 'Error sending data to the server.'
        },
        messages: {
            acceptTerms: 'I agree with the policy terms <a href="{link}">Policy</a>',
            doYouWantToDelete: 'Do you want to delete this record?',
            confirmRemove: 'Are you sure you want to remove this record?',
            successDeletion: '{what} was successfuly removed',
            registeredWithSuccess: 'You were registered with success. Please, sign in again.',
            savedWithSuccess: '{what} saved with success.',
            noMatching: 'Sorry, no matching options'
        },
        job: {
            error: 'Error running job. See more details in the log window above.',
            logs: 'Execution log | Execution logs',
            results: 'Result | Results',
            sourceCode: 'Source code',
            visualizations: 'Visualization | Visualizations',
        },
        titles: {
            action: 'Action | Actions',
            administration: 'Administration',
            cluster: 'Cluster | Clusters',
            dataSource: 'Data source | Data sources',
            dashboard: 'Dashboard | Dashboards',
            error: 'Error',
            errorDetail: 'Error detail (advanced)',
            globalPrivacyPolicy: 'Global privacy policy|Global privacy policies',
            job: 'Job | Jobs',
            jobs: 'Jobs',
            lemonade: 'Lemonade',
            lemonadePlatform: 'Lemonade Platform',
            login: 'Login',
            platform: 'Platform | Platforms',
            profile: 'Profile',
            property: 'Property | Properties',
            register: 'Sign up',
            storage: 'Storage | Storages',
            success: 'Success',
            template: 'Template | Templates',
            toolboxCategory: 'Toolbox disposition',
            user: 'User | Users',
            warning: 'Warning',
            whatIfModel: 'What if model?',
            workflow: 'Workflow | Workflows',
        },
        privacy: {
            anonymizationTechnique: 'Anonymization technique',
            privacyType: 'Privacy type',
            hierarchy: 'Hierarchy',
            attributePrivacyGroup: 'Attribute privacy group',
        },

        property: {
            alias: 'Alias',
            attribute: 'Attribute',
            editValue: 'Edit value...',
            function: 'Function',
            help: 'Help',
            taskName: 'Task name (optional)',
            expression: {
                alias: 'New attribute name (alias)',
                explanation: 'Add one or more expresssions. New attributes will be created from the expressions informed here and you need to inform a name (alias) for them.',
                tip: `To use an attribute, just inform its name. For string constants, delimit them with quotes (single or double). 
                Examples: <code>substring(name, instr(name, " "))</code>.`,
                title: 'Expression',
                validExpressions: `Valid expressions include math expressions 
                (e.g. <strong><code>attr * 10 - 4 </code></strong>) and function calls 
                (e.g. <strong><code>split(attr, ' ') </code></strong>). For more informations, 
                see Lemonade Reference Guide or Apache Spark SQL functions. `,
            },
            queryBuilder: {
                explanation: 'Write a SQL compatible Query. The supported syntax depend on the choosen platform, but in simple queries work in all cases. See documentation for more information.',
                title: 'SQL query command',
            },
        },
        profile: {
            alsoChangePassword: 'Also change my password',
            updated: 'Profile updated'
        },
        home: {
            aPlatformForDataScience: 'A platform for data science',
            learnMore: 'Learn more',
            recentlyUpdated: 'Recently updated {what}',
            welcome: `Welcome to Lemonade. 
            Lemonade (Live Exploration and Mining Of Non-trivial Amount of Data from Everywhere) is a visual platform for distributed computing, aimed to enable implementation, experimentation, test and deploying of data processing and machine learning applications. It provides a higher level of abstractions, called operations, to users build processing workflows using a graphical web interface. By using high performance and scalable technologies, such as COMPSs, Ophidia and Spark, Lemonade can process very large amount of data, hiding all backend complexity from the users and allowing them to focus mainly in the construction of the solution.
            Lemonade is implemented as an open-source tool and is under development as a product of EUBra-BIGSEA project.`
        },
        workflow: {
            asImage: 'As a image (a download window will appear)',
            asTemplate: 'As a template workflow',
            copyOf: 'Copy of',
            execute: 'Execute workflow',
            imageGeneratedAt: 'Image generated at',
            jobName: 'Job name',
            newName: 'New name (a copy of the workflow will be created, but not loaded)',
            required: 'Please, complete the required information for the execution of the workflow',
            restoreHistory: 'Do you really want to restore this workflow version?',
            versionRestored: 'Version {version} restored with success and now it is also version {version2}. But IT IS NOT SAVED, you need to explicitly save it.',
        }
    }
    
}
