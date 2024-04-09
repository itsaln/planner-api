import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from '@app/app.controller'
import { AppService } from '@app/app.service'
import { PrismaService } from '@app/prisma.service'
// import { AuthModule } from '@app/auth/auth.module'
// import { UserModule } from '@app/user/user.module'
// import { FileModule } from '@app/file/file.module'
// import { ProjectModule } from '@app/project/project.module'
// import { SkillModule } from '@app/skill/skill.module'
// import { NewsModule } from '@app/news/news.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		// UserModule,
		// FileModule,
		// AuthModule,
		// ProjectModule,
		// SkillModule,
		// NewsModule
	],
	controllers: [AppController],
	providers: [AppService, PrismaService]
})
export class AppModule {}
